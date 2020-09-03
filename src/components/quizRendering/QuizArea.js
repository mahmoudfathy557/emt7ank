import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'

export default function QuizArea(props) {
  console.log(props, 'from quiz area')

  return (
    <div>
      <div className='text-primary display-4 bg-dark rounded-pill mb-3'>
        Question <span> {props.currentQuestion} </span> of
        <span> {props.totalQuestions} </span>
      </div>

      {/* <Question question={props.question} /> */}
      {/* 
  <AnswerList
   dataSet={props.dataSet}
   handleClick={props.handleClick}
  /> */}
    </div>
  )
}
