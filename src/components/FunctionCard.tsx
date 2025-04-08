import React, { useState } from "react";
import "./FunctionCard.css";

interface Function {
  name: string;
  description: string;
  example: string;
  inputPlaceholder?: string;
  tryIt?: (
    input: string
  ) => string | number | any[] | { [key: string]: number } | any;
}

interface FunctionCardProps {
  title: string;
  functions: Function[];
}

const FunctionCard: React.FC<FunctionCardProps> = ({ title, functions }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [outputs, setOutputs] = useState<{ [key: string]: string }>({});

  const handleInputChange = (functionName: string, value: string) => {
    setInputs({ ...inputs, [functionName]: value });
  };

  const handleTryFunction = (func: Function) => {
    if (func.tryIt) {
      const result = func.tryIt(inputs[func.name] || "");
      setOutputs({ ...outputs, [func.name]: JSON.stringify(result) });
    }
  };

  return (
    <div className="function-card">
      <div
        className="function-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>{title}</h3>
        <span className="expand-icon">{isExpanded ? "−" : "+"}</span>
      </div>
      {isExpanded && (
        <div className="function-card-content">
          {functions.map((func, index) => (
            <div key={index} className="function-item">
              <h4>{func.name}</h4>
              <p>{func.description}</p>
              <code>{func.example}</code>
              <div className="try-it-section">
                <input
                  type="text"
                  placeholder={func.inputPlaceholder || "Enter input array..."}
                  value={inputs[func.name] || ""}
                  onChange={(e) => handleInputChange(func.name, e.target.value)}
                />
                <button onClick={() => handleTryFunction(func)}>Try it!</button>
                {outputs[func.name] && (
                  <div className="output">Result: {outputs[func.name]}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunctionCard;
