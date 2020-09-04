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
          const { toggleNext, togglePrev, index } = value
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
                  </div>
                </div>
              </div>
            )
          } else {
            return <span>error</span>
          }
        }}
      </ExamConsumer>
    )
  }
}
