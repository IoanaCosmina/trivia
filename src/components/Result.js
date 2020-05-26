import React from 'react';

function Result() {
    return (
        <div className="result modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <span role="img" aria-label="fist bump emoji">
                    👊👊👊
                    <br />
                    YOU WON!
                </span>
                <span role="img" aria-label="crying face emoji">
                    😢😢😢
                    <br />
                    YOU LOST!
                </span>
                <div className="correct-answer">
                    <small>The correct answer was:</small>
                    <br />
                    <strong>Answer here</strong>
                </div>
                <button>Next question</button>
            </div>
        </div>
    );
}

export default Result;