import React from 'react'

class CounterButton extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

// An alternative to shouldComponentUpdate() is the purecomponent prop from react.
// Nice to use but gives you less control and might not always notice changes in the component state
  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      return true
    }
    return false
    }

  updateCount = () => {
    this.setState(state => {
      return {count: this.state.count + 1}
    })
  }
  render () {  
    return (
    <button 
    id="counter" color={this.props.color} 
    onClick={this.updateCount}>
    Count: {this.state.count}
    </button>
    )
  }
}

export default CounterButton
