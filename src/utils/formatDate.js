const formatDate = (date) => {
  let day = date.getDate();
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  }
  if (day === 2 || day === 22) {
    suffix = "nd";
  }
  if (day === 3 || day === 23) {
    suffix = "rd";
  }
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}${suffix}, ${year}`;
};

export default formatDate;
