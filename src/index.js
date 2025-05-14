// Import the libraries
import dayjs from 'dayjs';
import businessDays from 'business-days-js';

// Optional: Import commonly used Day.js plugins
// Uncomment and add any plugins you need
/*
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Register plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
*/

// Optional: Configure business days
// Example: Setting US holidays for 2025
/*
businessDays.setHolidays([
  new Date('2025-01-01'), // New Year's Day
  new Date('2025-01-20'), // Martin Luther King Jr. Day
  new Date('2025-02-17'), // Presidents' Day
  new Date('2025-05-26'), // Memorial Day
  new Date('2025-07-04'), // Independence Day
  new Date('2025-09-01'), // Labor Day
  new Date('2025-10-13'), // Columbus Day
  new Date('2025-11-11'), // Veterans Day
  new Date('2025-11-27'), // Thanksgiving Day
  new Date('2025-12-25')  // Christmas Day
]);
*/

// Create a combined API for easier usage
const combinedAPI = {
  dayjs,
  businessDays,
  
  // Optional: Add convenience methods
  isBusinessDay: (date) => businessDays.isBusinessDay(date),
  nextBusinessDay: (date) => businessDays.nextBusinessDay(date),
  prevBusinessDay: (date) => businessDays.prevBusinessDay(date),
  addBusinessDays: (date, days) => businessDays.addBusinessDays(date, days)
};

// Export the combined API
export default combinedAPI;

// Make libraries available globally when loaded via script tag
if (typeof window !== 'undefined') {
  window.dayjs = dayjs;
  window.businessDays = businessDays;
  window.DayJSBusinessBundle = combinedAPI;
}