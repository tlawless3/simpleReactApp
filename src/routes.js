import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}
