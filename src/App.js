import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {HashRouter} from 'react-router-dom'

import Header from './components/header'
import ShotList from './components/Listing'
import * as actionCreators from './actionCreators'


export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchDribbleShots()
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <ShotList {...this.props} />
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
