import React from 'react'

export default function Quiz({
    questions,
    qIndex,
    currentChoice,
    onClickAnswer,
    nextQuestion,
    isReviewMode
}) {
    const currentQuestion = questions[qIndex] // this is where it calling all the data from questions.json
    return (
        <>
            <h1>DMV Permit Practice Test, CA</h1>
            <span>Question {qIndex + 1} of 20</span>
            <h1>{currentQuestion.description}</h1>
            <ul>
                {currentQuestion.choices.map((c) => {
                    const classes = []
                    if (c.key === currentChoice) classes.push("isSelected")
                    if (isReviewMode && c.key === currentQuestion.answer) classes.push("isCorrect")
                    return (
                        <li
                            className={classes.join(' ')}
                            onClick={() => onClickAnswer(c.key)}
                        >
                            <strong>{c.key}. </strong>
                            {c.description}
                        </li>
                    )
                })}
            </ul>
            {<button disabled={!currentChoice && !isReviewMode} onClick={nextQuestion}>Next Question</button>}
        </>
    )
}
