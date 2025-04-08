import React from 'react';
import Header from './components/Header';
import ArrayCard from './components/cards/ArrayCard';
import MathCard from './components/cards/MathCard';
import StringCard from './components/cards/StringCard';
import DateCard from './components/cards/DateCard';
import ObjectCard from './components/cards/ObjectCard';
import './styles/Card.css';
import './styles/Header.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="card-container">
        <ArrayCard />
        <MathCard />
        <StringCard />
        <DateCard />
        <ObjectCard />
      </div>
    </div>
  );
};

export default App;