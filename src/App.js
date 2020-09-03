import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ExamsPage from './pages/ExamsPage'
import SingleExamPage from './pages/SingleExamPage'
import Default from './pages/Defalut'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/' exact component={ExamsPage} />
          <Route path='/exams/:name' component={SingleExamPage} />
          <Route component={Default} />
        </Switch>
      </>
    )
  }
}

export default App
