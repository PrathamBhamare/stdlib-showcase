import React from "react";
import FunctionCard from "../FunctionCard";

const MathCard: React.FC = () => {
  const mathFunctions = [
    {
      name: "Math.abs()",
      description: "Returns the absolute value of a number.",
      example: `const num = -5;
const absolute = Math.abs(num);
// Result: 5`,
      inputPlaceholder: "Enter a number (e.g., -5)",
      tryIt: (input: string) => {
        try {
          return Math.abs(Number(input));
        } catch (e) {
          return "Please enter a valid number";
        }
      },
    },
    {
      name: "Math.round()",
      description: "Rounds a number to the nearest integer.",
      example: `const num = 5.6;
const rounded = Math.round(num);
// Result: 6`,
      inputPlaceholder: "Enter a decimal number (e.g., 5.6)",
      tryIt: (input: string) => {
        try {
          return Math.round(Number(input));
        } catch (e) {
          return "Please enter a valid decimal number";
        }
      },
    },
    {
      name: "Math.pow()",
      description: "Returns the base to the exponent power.",
      example: `const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
// Result: 8`,
      inputPlaceholder: "Enter base,exponent (e.g., 2,3)",
      tryIt: (input: string) => {
        try {
          const [base, exponent] = input.split(",").map(Number);
          return Math.pow(base, exponent);
        } catch (e) {
          return "Please enter base and exponent separated by comma";
        }
      },
    },
    {
      name: "Complex Number Operations",
      description:
        "Performs operations with complex numbers using real and imaginary parts",
      example: `const real1 = 3, imag1 = 2; // 3 + 2i
const real2 = 1, imag2 = 4; // 1 + 4i
// Multiplication: (3 + 2i)(1 + 4i) = (3 - 8) + (8 + 2)i = -5 + 10i`,
      inputPlaceholder: "Enter two complex numbers (e.g., 3,2;1,4)",
      tryIt: (input: string) => {
        try {
          const [comp1, comp2] = input.split(";");
          const [real1, imag1] = comp1.split(",").map(Number);
          const [real2, imag2] = comp2.split(",").map(Number);

          return {
            multiply: {
              real: real1 * real2 - imag1 * imag2,
              imaginary: real1 * imag2 + imag1 * real2,
            },
          };
        } catch (e) {
          return "Please enter complex numbers as: real,imaginary;real,imaginary";
        }
      },
    },
    {
      name: "Statistical Functions",
      description: "Calculates mean, median, mode, and standard deviation",
      example: `const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
// Mean: 3.125
// Median: 3.5
// Mode: 4
// StdDev: ~1.25`,
      inputPlaceholder: "Enter numbers (e.g., 1,2,2,3,4,4,4,5)",
      tryIt: (input: string) => {
        try {
          const numbers = input.split(",").map(Number);
          const mean = numbers.reduce((a, b) => a + b) / numbers.length;
          const sorted = [...numbers].sort((a, b) => a - b);
          const median =
            sorted.length % 2 === 0
              ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
              : sorted[Math.floor(sorted.length / 2)];

          const mode = numbers.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
          }, {} as { [key: number]: number });

          const modeValue = Object.entries(mode).reduce((a, b) =>
            a[1] > b[1] ? a : b
          )[0];

          const stdDev = Math.sqrt(
            numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) /
              numbers.length
          );

          return {
            mean,
            median,
            mode: modeValue,
            stdDev,
          };
        } catch (e) {
          return "Please enter a valid list of numbers separated by commas";
        }
      },
    },
    {
      name: "Matrix Determinant",
      description: "Calculates the determinant of a 2x2 or 3x3 matrix",
      example: `const matrix2x2 = [[1, 2], [3, 4]];
// Det(2x2) = 1*4 - 2*3 = -2

const matrix3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Det(3x3) = 1*(5*9-6*8) - 2*(4*9-6*7) + 3*(4*8-5*7)`,
      inputPlaceholder:
        "Enter matrix values (e.g., 1,2,3,4 for 2x2 or 1,2,3,4,5,6,7,8,9 for 3x3)",
      tryIt: (input: string) => {
        try {
          const values = input.split(",").map(Number);
          if (values.length === 4) {
            // 2x2 determinant
            return values[0] * values[3] - values[1] * values[2];
          } else if (values.length === 9) {
            // 3x3 determinant using Sarrus' rule
            const [a, b, c, d, e, f, g, h, i] = values;
            return (
              a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
            );
          }
          return "Please enter either 4 numbers (2x2) or 9 numbers (3x3)";
        } catch (e) {
          return "Invalid input format";
        }
      },
    },
    {
      name: "Vector Operations",
      description:
        "Performs vector operations (dot product, cross product, magnitude)",
      example: `const v1 = [1, 2, 3];
const v2 = [4, 5, 6];
// Dot product: 1*4 + 2*5 + 3*6 = 32
// Cross product: [2*6-3*5, 3*4-1*6, 1*5-2*4]
// Magnitude of v1: √(1² + 2² + 3²)`,
      inputPlaceholder: "Enter two 3D vectors (e.g., 1,2,3;4,5,6)",
      tryIt: (input: string) => {
        try {
          const [v1Str, v2Str] = input.split(";");
          const v1 = v1Str.split(",").map(Number);
          const v2 = v2Str.split(",").map(Number);

          const dotProduct = v1.reduce((sum, val, i) => sum + val * v2[i], 0);
          const crossProduct = [
            v1[1] * v2[2] - v1[2] * v2[1],
            v1[2] * v2[0] - v1[0] * v2[2],
            v1[0] * v2[1] - v1[1] * v2[0],
          ];
          const magnitude1 = Math.sqrt(
            v1.reduce((sum, val) => sum + val * val, 0)
          );
          const magnitude2 = Math.sqrt(
            v2.reduce((sum, val) => sum + val * val, 0)
          );

          return {
            dotProduct,
            crossProduct,
            magnitude: {
              v1: magnitude1,
              v2: magnitude2,
            },
          };
        } catch (e) {
          return "Please enter two 3D vectors separated by semicolon";
        }
      },
    },
    {
      name: "Polynomial Roots",
      description: "Finds roots of quadratic equation (ax² + bx + c = 0)",
      example: `const a = 1, b = -5, c = 6;
// x = (-b ± √(b² - 4ac)) / (2a)
// Roots: x = 2 or x = 3`,
      inputPlaceholder: "Enter coefficients a,b,c (e.g., 1,-5,6)",
      tryIt: (input: string) => {
        try {
          const [a, b, c] = input.split(",").map(Number);
          const discriminant = b * b - 4 * a * c;

          if (discriminant < 0) {
            return {
              type: "Complex roots",
              root1: `${-b / (2 * a)} + ${Math.sqrt(-discriminant) / (2 * a)}i`,
              root2: `${-b / (2 * a)} - ${Math.sqrt(-discriminant) / (2 * a)}i`,
            };
          }

          const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          return { root1, root2 };
        } catch (e) {
          return "Please enter coefficients a,b,c separated by commas";
        }
      },
    },
  ];

  return <FunctionCard title="Math Functions" functions={mathFunctions} />;
};

export default MathCard;
