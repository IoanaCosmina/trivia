import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Category from './components/Category';
import Score from './components/Score';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('any');

  const getQuestion = useCallback(() => {
    let url = 'https://opentdb.com/api.php?amount=1';
    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => setQuestion(data.results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  return (
    <div className="app">
      {/* <Result /> */}
      <div className="question-header">
        <Category category={selectedCategory} chooseCategory={setSelectedCategory} />
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
