import React from 'react'
import { ExamConsumer } from '../context/context'
import Exam from './Exam'

export default function Exams() {
  return (
    <ExamConsumer>
      {(value) => {
        const { exams } = value
        return (
          <section className='py-5'>
            <div className='container'>
              <div className='row py-5'>
                {exams.map((exam, index) => {
                  return (
                    <div className='col-10 mx-auto'>
                      <Exam key={index} exam={exam} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      }}
    </ExamConsumer>
  )
}
