import { useState, useEffect, useCallback } from 'react';

function useTrivia() {
    const [question, setQuestion] = useState(null);
    const [category, setCategory] = useState('any');
    const [difficulty, setDifficulty] = useState('');

    const getQuestion = useCallback(() => {
        let url = 'https://opentdb.com/api.php?amount=1';
        if (category !== 'any') url += `&category=${category}`;
        if (difficulty !== null) url += `&difficulty=${difficulty.toLowerCase()}`;

        fetch(url)
            .then(res => res.json())
            .then((data) => setQuestion(data.results[0]));
    }, [category, difficulty]);

    useEffect(() => {
        getQuestion();
    }, [getQuestion, category]);

    return { question, category, setCategory, difficulty, setDifficulty, getQuestion };
}

export default useTrivia;