const dateToString = (date) => {
  if (!date || (typeof date === "string" && isNaN(Date.parse(date)))) {
    return "Invalid date";
  }

  const formattedDate = new Date(date);
  if (isNaN(formattedDate.getTime())) {
    return "Invalid date";
  }

  const options = { day: "2-digit", month: "short", year: "numeric" };
  return formattedDate.toLocaleDateString("en-US", options);
};

export { dateToString };
