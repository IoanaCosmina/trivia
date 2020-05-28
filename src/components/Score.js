import React, { useState, useEffect } from 'react';

function Score({ isCorrect }) {
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    useEffect(() => {
        if (isCorrect === null) return;
        if (isCorrect) {
            setCorrect(score => score + 1);
        } else {
            setIncorrect(score => score + 1);
        }
    }, [isCorrect]);

    return (
        <div className="score">
            <div className="incorrect">
                <strong>{incorrect}</strong>
                <span>incorrect</span>
            </div>
            <div className="correct">
                <strong>{correct}</strong>
                <span>correct</span>
            </div>
        </div>
    );
}

export default Score;