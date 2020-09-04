import React from 'react'
import { ExamConsumer } from '../../context'

export default function Answer({ index, answer, choice }) {
  return (
    <ExamConsumer>
      {(value) => {
        const { handleChange, studentAnswer, getRightAnswer } = value

        return (
          <div class='form-check'>
            <label>
              <input
                type='radio'
                name='studentAnswer'
                value={choice}
                checked={studentAnswer === choice}
                onChange={handleChange}
                onClick={() => getRightAnswer(answer, index)}
              />
              {choice}
            </label>
          </div>
        )
      }}
    </ExamConsumer>
  )
}
