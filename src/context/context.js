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
    studentAnswerId: null,

    singleExam: {},
    loading: true,
    index: 0,
    disabledNext: false,
    disabledPrev: false,
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
  setSingleExam = (id) => {
    let exam = this.state.exams.find((item) => item.subject === id)
    localStorage.setItem('singleExam', JSON.stringify(exam))
    this.setState({
      singleExam: { ...exam },
      loading: false,
    })
  }

  getRightAnswer = (id) => {
    console.log(id, 'answerNumber')

    this.setState({ answerId: id })
  }
  handleChange = (event) => {
    const { name, value, id, type, checked } = event.target
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value, studentAnswerId: id })
  }

  prevBtn = (e) => {
    let index = this.state.index - 1
    let disabledPrev = index === 0

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false,
    })
  }

  nextBtn(e) {
    let index = this.state.index + 1
    let disabledNext = index === this.state.exams.length - 1

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false,
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

          prevBtn: this.prevBtn,
          nextBtn: this.nextBtn,
        }}
      >
        {this.props.children}
      </ExamContext.Provider>
    )
  }
}

const ExamConsumer = ExamContext.Consumer

export { ExamProvider, ExamConsumer }
