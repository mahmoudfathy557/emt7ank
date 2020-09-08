import React from 'react'
import { ExamConsumer } from '../../context'
import { Radio, Input } from 'antd'

export default function Answer({ questionId, answer, choices }) {
  return (
    <ExamConsumer>
      {(value) => {
        const { handleChange, studentAnswer, usersAnswers } = value
        const radioStyle = {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        }
        return (
          <Radio.Group
            onChange={(e, qId) => handleChange(e, questionId)}
            value={
              usersAnswers[questionId] !== undefined &&
              usersAnswers[questionId] !== null
                ? usersAnswers[questionId]
                : null
            }
          >
            {choices.map((choice, index) => {
              return (
                <Radio style={radioStyle} value={choice} key={index}>
                  {choice}
                </Radio>
              )
            })}
          </Radio.Group>
        )
      }}
    </ExamConsumer>
  )
}
