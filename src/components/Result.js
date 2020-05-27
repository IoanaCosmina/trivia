import React from 'react';

function Result({ isCorrect, question, getQuestion }) {
    return (
        <div className={`result modal ${isCorrect ? 'is-correct' : 'is-incorrect'}`}>
            <div className="overlay"></div>
            <div className="modal-content">
                {
                    isCorrect &&
                    <span role="img" aria-label="fist bump emoji">
                        👊👊👊
                    <br />
                    YOU WON!
                </span>
                }
                {
                    !isCorrect &&
                    <span role="img" aria-label="crying face emoji">
                        😢😢😢
                    <br />
                    YOU LOST!
                </span>
                }
                {
                    !isCorrect &&
                    <div className="correct-answer">
                        <small>The correct answer was:</small>
                        <br />
                        <strong dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
                    </div>
                }
                <button onClick={getQuestion}>Next question</button>
            </div>
        </div>
    );
}

export default Result;