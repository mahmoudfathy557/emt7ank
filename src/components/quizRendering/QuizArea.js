import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'

export default function QuizArea(props) {
  return (
    <div>
      <div className='text-primary display-4 bg-dark rounded-pill mb-3'>
        Question <span> {props.index + 1} </span> of
        <span> {props.totalQuestions} </span>
      </div>

      <Question question={props.question} />

      <AnswerList singleExam={props} questionId={props.id} />
    </div>
  )
}
