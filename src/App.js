import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Category from './components/Category';
import Score from './components/Score';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('any');
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);

    let url = 'https://opentdb.com/api.php?amount=1';
    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => setQuestion(data.results[0]));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  function handleAnswer(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  return (
    <div className="app">
      {isCorrect !== null && <Result isCorrect={isCorrect} question={question} getQuestion={getQuestion} />}
      <div className="question-header">
        <Category category={selectedCategory} chooseCategory={setSelectedCategory} />
        <Score isCorrect={isCorrect} />
      </div>
      <div className="question-main">
        {question && <Question question={question} handleAnswer={handleAnswer} />}
      </div>
      <div className="question-footer">
        <button onClick={getQuestion}>Next question</button>
      </div>
    </div>
  );
}

export default App;
