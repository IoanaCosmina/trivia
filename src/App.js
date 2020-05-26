import React from 'react';
import './App.css';
import Category from './components/Category';
import Score from './components/Score';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (
    <div className="app">
      <div className="question-header">
        <Category />
        <Score />
      </div>
      <div className="question-main">
        <Question />
      </div>
      <div className="question-footer">
        <button>Next question</button>
      </div>
    </div>
  );
}

export default App;
