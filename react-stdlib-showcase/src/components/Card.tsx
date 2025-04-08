import React from "react";

interface CardProps {
  title: string;
  content: React.ReactNode; // Changed from string to ReactNode to accept JSX elements
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
