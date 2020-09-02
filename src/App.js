import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Exams from './pages/ExamsPage'
import SingleExam from './pages/SingleExam'
import Default from './pages/Defalut'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/' exact component={Exams} />
          <Route path='/exams/:name' component={SingleExam} />
          <Route component={Default} />
        </Switch>
      </>
    )
  }
}

export default App
