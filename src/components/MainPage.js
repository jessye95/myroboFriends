import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/searchbox'
import Scroll from '../components/scroll'
import ErrorBoundary from '../components/errorBoundary'
import Header from '../components/header'

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filterRobos = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase()
        .includes(this.props.searchField.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1>
            : <ErrorBoundary>
              <CardList robots={this.filterRobos()} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    )
  }
}

export default MainPage
