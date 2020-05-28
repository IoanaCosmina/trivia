import React, { useState } from 'react';
import './App.css';
import Category from './components/Category';
import Difficulty from './components/Difficulty';
import Score from './components/Score';
import Question from './components/Question';
import Result from './components/Result';
import useTrivia from './useTrivia';

function App() {
  const { question, getQuestion, category, setCategory, difficulty, setDifficulty } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleAnswer(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="app">
      {isCorrect !== null &&
        <Result isCorrect={isCorrect} question={question} getQuestion={handleNextQuestion} />}
      <div className="question-header">
        <Category category={category} chooseCategory={setCategory} />
        <Difficulty difficulty={difficulty} chooseDifficulty={setDifficulty} />
        <Score isCorrect={isCorrect} />
      </div>
      <div className="question-main">
        {question &&
          <Question question={question} handleAnswer={handleAnswer} />}
      </div>
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Next question</button>
      </div>
    </div>
  );
}

export default App;
