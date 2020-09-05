import QuizArea from './QuizArea'
import { ExamConsumer } from '../../context'

import React from 'react'

export default function QuizRendering(props) {
  if (props.loading) {
    return (
      <div>
        <h1 className='text-center text-muted text-capitalize'>
          exam is loading...
        </h1>
      </div>
    )
  } else {
    return (
      <ExamConsumer>
        {(value) => {
          const {
            toggleNext,
            togglePrev,
            index,
            submitquiz,
            correctAnswers,
            incorrectAnswers,
          } = value
          const quiz = props.exam.mcqs ? props.exam.mcqs[index] : null
          if (quiz) {
            return (
              <div className='quiz'>
                <div>
                  <QuizArea
                    {...quiz}
                    totalQuestions={props.exam.mcqs.length}
                    index={index}
                  />
                  <div className='btn-container d-flex'>
                    <button
                      className={
                        index === 0 ? 'disabledBtn' : 'showBtn btn-dark mr-2'
                      }
                      onClick={togglePrev}
                    >
                      Previous
                    </button>
                    <button
                      className={
                        index === props.exam.mcqs.length - 1
                          ? 'disabledBtn'
                          : 'showBtn btn-dark  '
                      }
                      onClick={toggleNext}
                    >
                      Next
                    </button>
                    <button
                      className={
                        index === props.exam.mcqs.length - 1
                          ? 'showBtn btn-dark '
                          : 'disabledBtn'
                      }
                      onClick={submitquiz}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )
          } else if (index === props.exam.mcqs.length) {
            return (
              <div className='score-area  btn-container d-flex  '>
                <div className='correct-answers mr-1'>{`correctAnswers: ${correctAnswers}`}</div>
                <div className='incorrect-answers ml-1'>{`incorrectAnswers: ${incorrectAnswers}`}</div>
              </div>
            )
          }
        }}
      </ExamConsumer>
    )
  }
}
