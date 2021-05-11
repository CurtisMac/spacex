import update from "immutability-helper";

const initialState = {
  launches: [],
  filterByYear: null,
  order: "asc",
  launchYears: [],
};

function launchesReducer(state, { type, payload }) {
  if (type === "load") {
    const { launches, rockets } = payload;
    //ensure launches are sorted by date
    const sortedLaunches = [...launches].sort(
      (a, b) => a.date_unix - b.date_unix
    );
    const data = sortedLaunches.reduce(
      (acc, cur) => {
        const launchYear = new Date(cur.date_local).getFullYear();
        cur.rocketDetails = rockets.find((rocket) => rocket.id === cur.rocket);
        cur.launchYear = launchYear;
        acc.years.add(launchYear);
        acc.launches.push(cur);
        return acc;
      },
      { years: new Set([]), launches: [] }
    );
    return update(state, {
      launches: { $set: data.launches },
      launchYears: { $set: Array.from(data.years) },
    });
  }

  if (type === "sort") {
    return update(state, { order: { $set: payload } });
  }
  if (type === "filter") {
    return update(state, { filterByYear: { $set: payload } });
  }
}

export { initialState, launchesReducer };
