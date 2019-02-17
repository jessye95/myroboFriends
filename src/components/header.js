import React from 'react'

const headerStyle = {
  fontSize: '3rem',
  color: 'white',
  fontFamily: "'Open sans', sans-serif",
  fontWeight: 300,
  textTransform: 'uppercase',
  letterSpacing: '3px'
}

class Header extends React.Component {
  // shouldComponentUpdate (nextProps, nextState) {
  //   return true
  // }
  render () {
    return (
      <div>
        <h1
          className='f1'
          style={headerStyle}>
          RoboFriends</h1>
      </div>
    )
  }
}

export default Header
