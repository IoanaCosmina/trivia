import React from 'react';

const dummyAnswers = ['Answer A', 'Answer B', 'Answer C', 'Answer D'];

function Question() {
    return (
        <div className="question">
            <h2>Question Text</h2>
            {dummyAnswers.map((answer, index) => (
                <button key={index}>{answer}</button>
            ))}
        </div>
    );
}

export default Question;