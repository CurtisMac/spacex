const launchesApi = {
  getRockets: async function () {
    const resp = await fetch("https://api.spacexdata.com/v4/rockets");
    return await resp.json();
  },
  getLaunches: async function () {
    const resp = await fetch("https://api.spacexdata.com/v4/launches");
    return await resp.json();
  },
  getAllData: async function () {
    const [rockets, launches] = await Promise.all([
      this.getRockets(),
      this.getLaunches(),
    ]);
    return { rockets, launches };
  },
};

export default launchesApi;
