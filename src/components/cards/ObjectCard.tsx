import React from "react";
import FunctionCard from "../FunctionCard";

const ObjectCard: React.FC = () => {
  const objectFunctions = [
    {
      name: "Object.keys()",
      description:
        "Returns an array of object's own enumerable property names.",
      example: `const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
// Result: ["a", "b", "c"]`,
      inputPlaceholder: 'Enter key-value pairs (e.g., {"a":1,"b":2})',
      tryIt: (input: string) => {
        try {
          const obj = JSON.parse(input);
          return Object.keys(obj);
        } catch (e) {
          return "Please enter valid JSON object";
        }
      },
    },
    {
      name: "Object.values()",
      description:
        "Returns an array of object's own enumerable property values.",
      example: `const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
// Result: [1, 2, 3]`,
      inputPlaceholder: 'Enter key-value pairs (e.g., {"a":1,"b":2})',
      tryIt: (input: string) => {
        try {
          const obj = JSON.parse(input);
          return Object.values(obj);
        } catch (e) {
          return "Please enter valid JSON object";
        }
      },
    },
    {
      name: "Object.entries()",
      description: "Returns an array of object's own [key, value] pairs.",
      example: `const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
// Result: [["a", 1], ["b", 2]]`,
      inputPlaceholder: 'Enter key-value pairs (e.g., {"a":1,"b":2})',
      tryIt: (input: string) => {
        try {
          const obj = JSON.parse(input);
          return Object.entries(obj);
        } catch (e) {
          return "Please enter valid JSON object";
        }
      },
    },
  ];

  return <FunctionCard title="Object Functions" functions={objectFunctions} />;
};

export default ObjectCard;
