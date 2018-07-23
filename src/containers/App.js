// Used npm react-redux package to notify react it will be working together with redux

import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/searchbox'
import Scroll from '../components/scroll'
import ErrorBoundary from '../components/errorBoundary'
import Header from '../components/header'
import { setSearchField, requestRobots } from '../action'

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
  componentDidMount () {
    this.props.onRequestRobots()
  }

  render () {
    const { searchField, onSearchChange, robots, isPending } = this.props
    
    const filteredRobos = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          { isPending ? <h1>Loading</h1>
            : <ErrorBoundary>
              <CardList robots={filteredRobos} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect() sends the props to the App component
