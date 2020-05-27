import React, { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import Score from './components/Score';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    getQuestion();
  }, []);

  function getQuestion() {
    const url = 'https://opentdb.com/api.php?amount=1';

    fetch(url)
      .then(res => res.json())
      .then((data) => setQuestion(data.results[0]));
  }

  return (
    <div className="app">
      {/* <Result /> */}
      <div className="question-header">
        <Category />
        <Score />
      </div>
      <div className="question-main">
        {question && <Question question={question} />}
      </div>
      <div className="question-footer">
        <button>Next question</button>
      </div>
    </div>
  );
}

export default App;
