// Used npm react-redux package to notify react it will be working together with redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../action'
import MainPage from '../components/MainPage'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// This is a dispatcher that dispatches the action taking place in the robofriends App real-time for the App component
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render () {
    return <MainPage {...this.props} />
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect() sends the props to the App component
