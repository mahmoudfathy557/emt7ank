import React from 'react'
import QuizArea from './QuizArea'
import { ExamConsumer } from '../../context'

export default function QuizRendering({ exam, loading }) {
  if (loading) {
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
            studentAnswer,
            currentQuestion,
            prevBtn,
            nextBtn,
            disabledNex,
            disabledPrev,
            index,
          } = value
          console.log(exam.mcqs.length, 'lengthhhhhhhhh')
          const quiz = exam.mcqs ? exam.mcqs[index] : null
          if (quiz) {
            return (
              <>
                <div className='slider-container'>
                  <div className='slide'>
                    <QuizArea
                      {...quiz}
                      currentQuestion={currentQuestion}
                      totalQuestions={exam.mcqs.length}
                    />
                  </div>
                </div>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='prevBtn'
                    onClick={() => prevBtn()}
                    disabled={disabledPrev}
                  >
                    prev
                  </button>
                  <button
                    type='button'
                    className='nextBtn'
                    onClick={() => nextBtn()}
                    disabled={disabledNex}
                  >
                    next
                  </button>
                </div>
              </>
            )
          }
        }}
      </ExamConsumer>
    )
  }
}
