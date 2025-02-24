const dateFormat = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default dateFormat;
