import React from 'react'
import { Link } from 'react-router-dom'

import { ExamConsumer } from '../context'
import QuizRendering from '../components/quizRendering/QuizRendering'

export default function SingleExamPage() {
  return (
    <>
      <ExamConsumer>
        {(value) => {
          const { singleExam, loading } = value
          const { subject } = singleExam
          return (
            <div className='container text-center'>
              <div className='row py-5'>
                <div className='col-10 mx-auto'>
                  <h1 className='text-muted '> {subject}</h1>
                </div>
              </div>
              <div className='row py-5'>
                <div className='container'>
                  <QuizRendering exam={singleExam} loading={loading} />
                </div>
              </div>
              <div className='row py-5'>
                <div className='col-4 mx-auto'>
                  <Link class='btn btn-secondary' to={`/`}>
                    Back to exams
                  </Link>
                </div>
              </div>
            </div>
          )
        }}
      </ExamConsumer>
    </>
  )
}
