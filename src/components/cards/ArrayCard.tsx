import React from "react";
import FunctionCard from "../FunctionCard";

const ArrayCard: React.FC = () => {
  const arrayFunctions = [
    {
      name: "map()",
      description:
        "Creates a new array with the results of calling a function for every array element.",
      example: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8]`,
      inputPlaceholder: "Enter input array (e.g., 1,2,3,4)",
      tryIt: (input: string) => {
        try {
          const numbers = input.split(",").map(Number);
          return numbers.map((num) => num * 2);
        } catch (e) {
          return "Please enter numbers separated by commas (e.g., 1,2,3,4)";
        }
      },
    },
    {
      name: "filter()",
      description: "Creates a new array with elements that pass a test.",
      example: `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Result: [2, 4, 6]`,
      tryIt: (input: string) => {
        try {
          const numbers = input.split(",").map(Number);
          return numbers.filter((num) => num % 2 === 0);
        } catch (e) {
          return "Please enter numbers separated by commas (e.g., 1,2,3,4,5,6)";
        }
      },
    },
    {
      name: "reduce()",
      description: "Reduces an array to a single value (from left-to-right).",
      example: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Result: 10`,
      tryIt: (input: string) => {
        try {
          const numbers = input.split(",").map(Number);
          return numbers.reduce((acc, curr) => acc + curr, 0);
        } catch (e) {
          return "Please enter numbers separated by commas (e.g., 1,2,3,4)";
        }
      },
    },
    {
      name: "flatMap() with Nested Arrays",
      description: "Maps and flattens nested arrays in a single operation.",
      example: `const arr = [[1, 2], [3, 4], [5, 6]];
const result = arr.flatMap(subArr => subArr.map(x => x * 2));
// Result: [2, 4, 6, 8, 10, 12]`,
      inputPlaceholder: "Enter nested arrays (e.g., 1,2;3,4;5,6)",
      tryIt: (input: string) => {
        try {
          const nestedArrays = input
            .split(";")
            .map((sub) => sub.split(",").map(Number));
          return nestedArrays.flatMap((subArr) => subArr.map((x) => x * 2));
        } catch (e) {
          return "Please enter numbers in format: 1,2;3,4;5,6";
        }
      },
    },
    {
      name: "slice() with Negative Indices",
      description:
        "Extracts array portions using negative indices for end-based selection.",
      example: `const arr = [1, 2, 3, 4, 5];
const last3 = arr.slice(-3);
// Result: [3, 4, 5]`,
      inputPlaceholder: "Enter array and start index (e.g., 1,2,3,4,5;-3)",
      tryIt: (input: string) => {
        try {
          const [arrStr, indexStr] = input.split(";");
          const arr = arrStr.split(",").map(Number);
          const index = parseInt(indexStr);
          return arr.slice(index);
        } catch (e) {
          return "Please enter array and index: 1,2,3,4,5;-3";
        }
      },
    },
    {
      name: "Advanced Sort",
      description:
        "Sorts arrays with custom comparison function for complex objects.",
      example: `const items = [{name: 'A', value: 2}, {name: 'B', value: 1}];
items.sort((a, b) => a.value - b.value);
// Result: [{name: 'B', value: 1}, {name: 'A', value: 2}]`,
      inputPlaceholder: "Enter name,value pairs (e.g., A,2;B,1;C,3)",
      tryIt: (input: string) => {
        try {
          const items = input.split(";").map((item) => {
            const [name, value] = item.split(",");
            return { name, value: parseInt(value) };
          });
          return items.sort((a, b) => a.value - b.value);
        } catch (e) {
          return "Please enter items as: A,2;B,1;C,3";
        }
      },
    },
    {
      name: "Group By with reduce()",
      description: "Groups array elements by a key using reduce.",
      example: `const items = [
  {category: 'A', value: 10},
  {category: 'B', value: 20},
  {category: 'A', value: 30}
];
const grouped = items.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.value;
  return acc;
}, {});
// Result: { A: 40, B: 20 }`,
      inputPlaceholder: "Enter category,value pairs (e.g., A,10;B,20;A,30)",
      tryIt: (input: string) => {
        try {
          const items = input.split(";").map((item) => {
            const [category, value] = item.split(",");
            return { category, value: parseInt(value) };
          });
          return items.reduce((acc: { [key: string]: number }, item) => {
            acc[item.category] = (acc[item.category] || 0) + item.value;
            return acc;
          }, {});
        } catch (e) {
          return "Please enter items as: A,10;B,20;A,30";
        }
      },
    },
  ];

  return <FunctionCard title="Array Functions" functions={arrayFunctions} />;
};

export default ArrayCard;
