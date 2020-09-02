import React, { Component } from 'react'
import { data } from './examsData'
const ExamContext = React.createContext()

class ExamProvider extends Component {
  state = {
    exams: [],
    correctAnswers: 0,
    incorrectAnswers: 0,
  }

  componentDidMount() {
    this.setExams(data)
  }

  setExams = (examsData) => {
    // let exams=examsData.map(exam=>{

    // })
    this.setState({ exams: examsData })
  }
  render() {
    return (
      <ExamContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ExamContext.Provider>
    )
  }
}

const ExamConsumer = ExamContext.Consumer

export { ExamProvider, ExamConsumer }
