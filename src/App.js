import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ShotList from './components/Listing'
import Header from './components/header'
import * as actionCreators from './actionCreators'


class App extends Component {
  componentDidMount() {
    this.props.actions.fetchDribbleShots()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ShotList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
