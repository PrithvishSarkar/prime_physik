const todayDateRange = () => {
  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setUTCHours(23, 59, 59, 999);

  return { todayStart, todayEnd };
}

export default todayDateRange;