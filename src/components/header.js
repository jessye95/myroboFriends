import React from 'react'
import CounterButton from './counterButton'

class Header extends React.Component {
  // shouldComponentUpdate (nextProps, nextState) {
  //   return true
  // }
  render () {
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header
