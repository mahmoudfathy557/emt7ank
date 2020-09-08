import React from 'react'
import Answer from './Answer'
export default function AnswerList({ singleExam, questionId }) {
  console.log(questionId, 'questionId')
  const {
    choice_a,
    choice_b,
    choice_c,
    choice_d,
    choice_e,
    answer,
  } = singleExam
  let arrAnswers = [choice_a, choice_b, choice_c, choice_d, choice_e]
  let notNullArrAnswers = arrAnswers.filter((item) => item !== null)

  if (notNullArrAnswers) {
    return (
      <>
        <Answer
          choices={notNullArrAnswers}
          questionId={questionId}
          answer={answer}
        />
      </>
    )
  }
}
