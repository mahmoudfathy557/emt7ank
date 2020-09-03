import React, { Component } from 'react'
import { data } from './examsData'
const ExamContext = React.createContext()

class ExamProvider extends Component {
  state = {
    exams: [],
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 1,
    studentAnswer: '',
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
  handleChange = (event) => {
    const name = event.target.name
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    )
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
  // nextSlider=()=>{
  //   this.setState((prevState)=>{
  //     return{
  //       sliderCounter:prevState.sliderCounter++
  //     }
  //   })
  //   carousel()
  // }
  // slider = () => {

  //   if (this.state.exams.length !== 0) {
  //     const slides = document.querySelectorAll('.slide')

  //     const nextBtn = document.querySelector('.nextBtn')
  //     const prevBtn = document.querySelector('.prevBtn')
  //     slides.forEach(function (slide, index) {
  //       slide.style.left = `${index * 100}%`
  //     })
  //     let counter = 0
  //      nextSlider=()=>{

  //     }

  //     nextBtn.addEventListener('click', function () {
  //       counter++

  //     })

  //     prevBtn.addEventListener('click', function () {
  //       counter--

  //       carousel()
  //     })

  //     function carousel() {
  //       if (counter < slides.length - 1) {
  //         nextBtn.style.display = 'block'
  //       } else {
  //         nextBtn.style.display = 'none'
  //       }
  //       if (counter > 0) {
  //         prevBtn.style.display = 'block'
  //       } else {
  //         prevBtn.style.display = 'none'
  //       }
  //       slides.forEach(function (slide) {
  //         slide.style.transform = `translateX(-${counter * 100}%)`
  //       })
  //     }

  //     prevBtn.style.display = 'none'
  //   }
  // }

  render() {
    return (
      <ExamContext.Provider
        value={{
          ...this.state,
          setSingleExam: this.setSingleExam,
          handleChange: this.handleChange,
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
