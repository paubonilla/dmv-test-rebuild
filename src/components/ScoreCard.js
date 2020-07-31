import React from 'react'

function ScoreCard({ score, setQIndex }) {
  const question = `question${score.length > 1 ? "s" : ""}`;
  return (
    <>
      <span>
        Congrats, you got {score} {question} right!
      </span>
      <span>
        To take the test again just refresh this page
        <br />
        <br />
        Or click Review to see the questions with correct answers
      </span>
      <button onClick={() => setQIndex(0)}>Review</button>
    </>
  )
}

export default ScoreCard
