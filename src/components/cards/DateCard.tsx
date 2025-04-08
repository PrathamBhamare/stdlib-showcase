import React from "react";
import FunctionCard from "../FunctionCard";

const DateCard: React.FC = () => {
  const dateFunctions = [
    {
      name: "new Date()",
      description: "Creates a new date object with the current date and time.",
      example: `const now = new Date();
console.log(now);
// Result: Current date and time`,
      inputPlaceholder:
        "Enter date string (e.g., 2025-04-08) or leave empty for current date",
      tryIt: (input: string) => {
        try {
          const date = input ? new Date(input) : new Date();
          return date.toString();
        } catch (e) {
          return "Please enter a valid date string";
        }
      },
    },
    {
      name: "toLocaleDateString()",
      description: "Returns a date as a string using locale conventions.",
      example: `const date = new Date();
const local = date.toLocaleDateString();
// Result: "4/8/2025"`,
      inputPlaceholder: "Enter date string (e.g., 2025-04-08)",
      tryIt: (input: string) => {
        try {
          const date = new Date(input);
          return date.toLocaleDateString();
        } catch (e) {
          return "Please enter a valid date string";
        }
      },
    },
    {
      name: "getTime()",
      description: "Returns the number of milliseconds since January 1, 1970.",
      example: `const date = new Date();
const timestamp = date.getTime();
// Result: milliseconds since epoch`,
      inputPlaceholder:
        "Enter date string (e.g., 2025-04-08) or leave empty for current date",
      tryIt: (input: string) => {
        try {
          const date = input ? new Date(input) : new Date();
          return date.getTime();
        } catch (e) {
          return "Please enter a valid date string";
        }
      },
    },
    {
      name: "Date Arithmetic",
      description: "Performs date arithmetic operations (add/subtract days, months, years).",
      example: `const date = new Date('2025-04-08');
date.setDate(date.getDate() + 5);  // Add 5 days
// Result: "2025-04-13"`,
      inputPlaceholder: "Enter date,days (e.g., 2025-04-08,5)",
      tryIt: (input: string) => {
        try {
          const [dateStr, days] = input.split(",");
          const date = new Date(dateStr);
          date.setDate(date.getDate() + parseInt(days));
          return date.toLocaleDateString();
        } catch (e) {
          return "Please enter date and days to add/subtract (use negative for subtraction)";
        }
      },
    },
    {
      name: "Date Difference",
      description: "Calculates the difference between two dates in days.",
      example: `const date1 = new Date('2025-04-08');
const date2 = new Date('2025-05-08');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// Result: "30 days"`,
      inputPlaceholder: "Enter two dates (e.g., 2025-04-08,2025-05-08)",
      tryIt: (input: string) => {
        try {
          const [date1Str, date2Str] = input.split(",");
          const date1 = new Date(date1Str);
          const date2 = new Date(date2Str);
          const diffTime = Math.abs(date2.getTime() - date1.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return `${diffDays} days`;
        } catch (e) {
          return "Please enter two valid dates separated by comma";
        }
      },
    },
    {
      name: "Date Format",
      description: "Formats a date using various locale options.",
      example: `const date = new Date('2025-04-08');
const formatted = date.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
// Result: "Tuesday, April 8, 2025"`,
      inputPlaceholder: "Enter date (e.g., 2025-04-08)",
      tryIt: (input: string) => {
        try {
          const date = new Date(input);
          return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
          });
        } catch (e) {
          return "Please enter a valid date";
        }
      },
    },
    {
      name: "ISO Week Number",
      description: "Gets the ISO week number for a given date.",
      example: `const date = new Date('2025-04-08');
const weekNum = getISOWeek(date);
// Result: "Week 15 of 2025"`,
      inputPlaceholder: "Enter date (e.g., 2025-04-08)",
      tryIt: (input: string) => {
        try {
          const date = new Date(input);
          const startDate = new Date(date.getFullYear(), 0, 1);
          const days = Math.floor((date.getTime() - startDate.getTime()) / 
              (24 * 60 * 60 * 1000));
          const weekNumber = Math.ceil(days / 7);
          return `Week ${weekNumber} of ${date.getFullYear()}`;
        } catch (e) {
          return "Please enter a valid date";
        }
      },
    }
  ];

  return <FunctionCard title="Date Functions" functions={dateFunctions} />;
};

export default DateCard;
