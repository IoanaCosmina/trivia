import React from 'react';
import './App.css';
import Category from './components/Category';
import Score from './components/Score';

function App() {
  return (
    <div className="app">
      <div className="question-header">
        <Category />
        <Score />
      </div>
    </div>
  );
}

export default App;
