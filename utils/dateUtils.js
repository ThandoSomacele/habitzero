// Shared date utilities for the app

// Configuration
export const DEV_MODE = false; // Set to true to use simulated start date
export const START_DATE = new Date('2025-10-01'); // Day 1 of counting (for dev mode)

// Helper function to format date as YYYY-MM-DD
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper to get start of day (midnight)
const getStartOfDay = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

// Helper to get yesterday's date at midnight
export const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getStartOfDay(yesterday);
};

// Calculate the number of days won (excluding relapse days)
// Only counts complete days (up to yesterday)
export const calculateDaysWon = (relapseDates = [], startDate = null) => {
  // Use provided startDate or fallback to START_DATE (dev mode) or first non-relapse day
  const actualStartDate = startDate ? new Date(startDate) : (DEV_MODE ? START_DATE : new Date());

  // Yesterday is the last complete day
  const yesterday = getYesterday();

  // If we haven't even completed one day yet, return 0
  if (getStartOfDay(actualStartDate) >= yesterday) {
    return 0;
  }

  const currentDate = new Date(getStartOfDay(actualStartDate));
  let daysWon = 0;

  // Count only complete days (up to and including yesterday)
  while (currentDate <= yesterday) {
    const dateStr = formatDate(currentDate);

    // Skip relapse days
    if (!relapseDates.includes(dateStr)) {
      daysWon++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysWon;
};

// Generate won days for calendar marking
// Only marks complete days (up to yesterday) as green
export const generateWonDays = (relapseDates = [], startDate = null) => {
  const wonDays = {};
  const actualStartDate = startDate ? new Date(startDate) : (DEV_MODE ? START_DATE : new Date());

  // Yesterday is the last complete day that can be marked
  const yesterday = getYesterday();

  // If we haven't completed a day yet, return empty
  if (getStartOfDay(actualStartDate) >= yesterday) {
    return wonDays;
  }

  const currentDate = new Date(getStartOfDay(actualStartDate));

  // Mark all complete days (up to yesterday) as green, excluding relapses
  while (currentDate <= yesterday) {
    const dateStr = formatDate(currentDate);

    // Skip relapse days
    if (!relapseDates.includes(dateStr)) {
      wonDays[dateStr] = {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#47A8BD'
      };
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return wonDays;
};

// Generate lost days for calendar marking
export const generateLostDays = (relapseDates = []) => {
  const lostDays = {};

  // Mark all user-tracked relapse dates as red
  relapseDates.forEach(dateStr => {
    lostDays[dateStr] = {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#DC7272'
    };
  });

  return lostDays;
};
