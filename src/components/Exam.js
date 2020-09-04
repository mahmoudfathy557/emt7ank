import React from 'react'
import { Link } from 'react-router-dom'
import { ExamConsumer } from '../context'

export default function Exam({ exam }) {
  return (
    <ExamConsumer>
      {(value) => {
        const { setSingleExam } = value
        return (
          <div
            class='alert alert-primary d-flex justify-content-between align-items-center'
            role='alert'
          >
            {exam.subject}
            <button type='button' class='btn btn-secondary'>
              <Link
                class='btn btn-secondary'
                to={`/exams/${exam.subject}`}
                onClick={() => setSingleExam(exam.subject, exam.mcqs)}
              >
                Take the Quiz
              </Link>
            </button>
          </div>
        )
      }}
    </ExamConsumer>
  )
}
