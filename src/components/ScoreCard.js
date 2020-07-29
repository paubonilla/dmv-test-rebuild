import React from 'react'

function ScoreCard({ score, setQIndex }) {
  return (
    <>
      <span>
        {score}
      </span>
      <button onClick={() => setQIndex(1)}>Review</button>
    </>
  )
}

export default ScoreCard
