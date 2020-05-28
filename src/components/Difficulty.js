import React from 'react';

const levels = ['Any Difficulty', 'Easy', 'Medium', 'Hard'];

function Difficulty({ difficulty, chooseDifficulty }) {
    return (
        <div className="difficulty">
            <p>Select Difficulty</p>
            <select value={difficulty} onChange={e => chooseDifficulty(e.target.value)}>
                {levels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                ))}
            </select>
        </div>
    );
}

export default Difficulty;