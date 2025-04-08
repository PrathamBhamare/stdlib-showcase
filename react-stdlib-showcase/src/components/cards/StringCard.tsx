import React from "react";
import FunctionCard from "../FunctionCard";

const StringCard: React.FC = () => {
  const stringFunctions = [
    {
      name: "toUpperCase()",
      description: "Converts a string to uppercase.",
      example: `const str = "hello world";
const upper = str.toUpperCase();
// Result: "HELLO WORLD"`,
      inputPlaceholder: "Enter any text to convert to uppercase",
      tryIt: (input: string) => input.toUpperCase(),
    },
    {
      name: "toLowerCase()",
      description: "Converts a string to lowercase.",
      example: `const str = "HELLO WORLD";
const lower = str.toLowerCase();
// Result: "hello world"`,
      inputPlaceholder: "Enter any text to convert to lowercase",
      tryIt: (input: string) => input.toLowerCase(),
    },
    {
      name: "substring()",
      description: "Extracts characters between two indices from a string.",
      example: `const str = "Hello World";
const sub = str.substring(0, 5);
// Result: "Hello"`,
      inputPlaceholder: "Enter text to extract substring (e.g., Hello World)",
      tryIt: (input: string) => input.substring(0, 5),
    },
    {
      name: "split()",
      description: "Splits a string into an array of substrings.",
      example: `const str = "apple,banana,orange";
const fruits = str.split(',');
// Result: ["apple", "banana", "orange"]`,
      inputPlaceholder:
        "Enter comma-separated values (e.g., apple,banana,orange)",
      tryIt: (input: string) => input.split(","),
    },
  ];

  return <FunctionCard title="String Functions" functions={stringFunctions} />;
};

export default StringCard;
