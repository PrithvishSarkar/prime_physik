const weekDateRange = () => {
  // The number of days from starting of present week
  // It makes sures that a week starts from Sunday and ends on Saturday
  const daysSinceWeekStartPresentDate = new Date().getDay();

  const weekStartDate = new Date(
    Date.now() - (daysSinceWeekStartPresentDate + 7) * 24 * 60 * 60 * 1000,
  );
  weekStartDate.setUTCHours(0, 0, 0, 0);
  const weekEndDate = new Date(
    Date.now() - (daysSinceWeekStartPresentDate + 1) * 24 * 60 * 60 * 1000,
  );
  weekEndDate.setUTCHours(23, 59, 59, 999);

  return { weekStartDate, weekEndDate };
};

export default weekDateRange;
