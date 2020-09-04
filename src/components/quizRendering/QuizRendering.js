import React, { Component } from 'react'
import QuizArea from './QuizArea'

class QuizRendering extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: false,
    }
  }
  togglePrev = (e) => {
    if (this.state.index !== 0) {
      let index = this.state.index - 1
      let disabledPrev = index === 0

      this.setState({
        index: index,
        disabledPrev: disabledPrev,
        disabledNext: false,
      })
    }
  }

  toggleNext = (e) => {
    let index = this.state.index + 1
    let disabledNext = index === this.props.exam.mcqs.length - 1

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false,
    })
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1 className='text-center text-muted text-capitalize'>
            exam is loading...
          </h1>
        </div>
      )
    } else {
      const { index, disabledNext, disabledPrev } = this.state
      const quiz = this.props.exam.mcqs ? this.props.exam.mcqs[index] : null
      if (quiz) {
        return (
          <div className='quiz'>
            <div>
              <QuizArea
                {...quiz}
                totalQuestions={this.props.exam.mcqs.length}
                index={index}
              />
              <button
                onClick={(e) => this.togglePrev(e)}
                disabled={disabledPrev}
              >
                Previous
              </button>
              <button
                onClick={(e) => this.toggleNext(e)}
                disabled={disabledNext}
              >
                Next
              </button>
            </div>
          </div>
        )
      } else {
        return <span>error</span>
      }
    }
  }
}

export default QuizRendering
