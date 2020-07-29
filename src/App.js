import React, { useState } from 'react'
import questions from './questions.json'
import Quiz from './components/Quiz'
import ScoreCard from './components/ScoreCard'
import { AppContainer, AppInner } from './styled'
import './App.css';

function App() {
  const [qIndex, setQIndex] = useState(0)
  const [currentChoice, setCurrentChoice] = useState()
  const [isComplete, setIsComplete] = useState(false)
  const [score, setScore] = useState(0)

  const onClickAnswer = (choice) => {
    if (!isComplete) setCurrentChoice(choice)
  }

  const nextQuestion = () => {
    if (currentChoice === questions[qIndex].answer) {
      setScore(score + 1)
    }
    setCurrentChoice(false)
    setQIndex(qIndex + 1)
    if (qIndex + 1 === questions.length) {
      setIsComplete(true)
    }
  }

  return (
    <AppContainer>
      <AppInner>
        {qIndex > questions.length - 1 ? (
          <ScoreCard
            score={score}
            setQIndex={setQIndex}
          />
        ) : (
            <Quiz
              qIndex={qIndex}
              questions={questions}
              currentChoice={currentChoice}
              onClickAnswer={onClickAnswer}
              nextQuestion={nextQuestion}
              isReviewMode={isComplete}
            />
          )}
      </AppInner>
    </AppContainer>
  )
}

export default App;
