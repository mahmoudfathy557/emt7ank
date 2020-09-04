import React, { Component } from 'react'
import { data } from './examsData'
const ExamContext = React.createContext()

class ExamProvider extends Component {
  state = {
    exams: [],
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 1,
    answerId: '',
    studentAnswerId: '',
    examMcqs: [],
    singleExam: {},
    loading: true,
    index: 0,
  }

  componentDidMount() {
    this.setExams(data)
  }

  setExams = (examsData) => {
    this.setState({
      exams: examsData,
      singleExam: this.getStorageExam(),
      loading: false,
    })
  }
  getStorageExam = () => {
    return localStorage.getItem('singleExam')
      ? JSON.parse(localStorage.getItem('singleExam'))
      : {}
  }
  setSingleExam = (id, examMcqs) => {
    let exam = this.state.exams.find((item) => item.subject === id)
    localStorage.setItem('singleExam', JSON.stringify(exam))
    this.setState({
      singleExam: { ...exam },
      loading: false,
      examMcqs: examMcqs,
    })
  }

  getRightAnswer = (answerId, studentAnswerId) => {
    this.setState({ answerId, studentAnswerId })
    console.log(answerId, 'answerId')
    console.log(studentAnswerId, 'studentAnswerId')
  }
  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  togglePrev = (e) => {
    let index = this.state.index - 1

    this.setState({
      index,
    })
  }
  toggleNext = (e) => {
    let index = this.state.index + 1

    this.setState({
      index,
    })
  }

  render() {
    return (
      <ExamContext.Provider
        value={{
          ...this.state,
          setSingleExam: this.setSingleExam,
          handleChange: this.handleChange,
          getRightAnswer: this.getRightAnswer,

          togglePrev: this.togglePrev,
          toggleNext: this.toggleNext,
        }}
      >
        {this.props.children}
      </ExamContext.Provider>
    )
  }
}

const ExamConsumer = ExamContext.Consumer

export { ExamProvider, ExamConsumer }
