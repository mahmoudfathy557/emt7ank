import React, { Component } from 'react'
import { data } from './examsData'
const ExamContext = React.createContext()

class ExamProvider extends Component {
  state = {
    exams: [],
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 1,
    usersAnswers: {},
    // answerId: '',
    // studentAnswerId: '',
    // radioChecked: false,
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

  // getRightAnswer = (answerId, studentAnswerId) => {
  //   answerId = parseInt(answerId)

  //   this.setState({ answerId, studentAnswerId })
  // }
  handleChange = (event, qId) => {
    console.log(qId, 'qId')
    const { usersAnswers } = this.state
    usersAnswers[qId] = event.target.value

    this.setState({ usersAnswers })
    console.log(usersAnswers[qId], 'from handlechange')
  }

  setQuizResult = () => {
    const {
      answerId,
      studentAnswerId,
      correctAnswers,
      incorrectAnswers,
      radioChecked,
      examMcqs,
    } = this.state
    for (let index = 0; index < examMcqs.length; index++) {
      if (radioChecked) {
        if (answerId === studentAnswerId) {
          this.setState({ correctAnswers: correctAnswers + 1 })
        } else {
          this.setState({ incorrectAnswers: incorrectAnswers + 1 })
        }
      }
    }

    console.log(
      correctAnswers,
      'correctAnswers',
      incorrectAnswers,
      'incorrectAnswers'
    )
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
    // this.setQuizResult()
  }

  // submitquiz = () => {
  //   this.setQuizResult()
  //   let index = this.state.index + 1

  //   this.setState({ index })
  //   console.log('quiz is submitted')
  // }

  render() {
    return (
      <ExamContext.Provider
        value={{
          ...this.state,
          setSingleExam: this.setSingleExam,
          handleChange: this.handleChange,
          // getRightAnswer: this.getRightAnswer,
          // submitquiz: this.submitquiz,
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
