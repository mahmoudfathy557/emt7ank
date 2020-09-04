import React from 'react'
import Answer from './Answer'
export default function AnswerList({ answers }) {
  const { choice_a, choice_b, choice_c, choice_d, choice_e, answer } = answers
  let arrAnswers = [choice_a, choice_b, choice_c, choice_d, choice_e]

  if (arrAnswers) {
    return (
      <>
        {arrAnswers.map((choice, index) => (
          <Answer choice={choice} index={index} key={index} answer={answer} />
        ))}
      </>
    )
  }
}
