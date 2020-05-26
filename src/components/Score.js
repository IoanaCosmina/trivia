import React from 'react';

function Score() {
    return (
        <div className="score">
            <div className="incorrect">
                <strong>0</strong>
                <span>incorrect</span>
            </div>
            <div className="correct">
                <strong>0</strong>
                <span>correct</span>
            </div>
        </div>
    );
}

export default Score;