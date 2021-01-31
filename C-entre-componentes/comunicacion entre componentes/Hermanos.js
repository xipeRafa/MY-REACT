import React, { Component } from 'react'


const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

const blueStyles = {
  ...boxStyles,
  border: '1px solid blue',
}

const redStyles = {
  ...boxStyles,
  border: '1px solid red',
}

class ComponentA extends Component {
  render () {
    const { num } = this.props
    return (
      <div style={blueStyles}>
        <button onClick={this.props.onAdd}>  
          Component A ( {num} )
        </button>
      </div>
    )
  }
}

class ComponentB extends Component {
  render () {
    const { num } = this.props
    return (
      <div style={redStyles}>
        <button onClick={this.props.onAdd}>  
          Component B ( {num} )
        </button>
      </div>
    )
  }
}



class App extends Component {
  state = {
    countA: 0,
    countB: 0
  }

  handleAddA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }))
  }

  handleAddB = () => {
    this.setState(state => ({
      countB: state.countB + 2
    }))
  }

  render () {
    const { countA, countB } = this.state

    return (
      <div style={boxStyles}>
      
        <ComponentA
          num={countA}
          onAdd={this.handleAddB}
        />
        <ComponentB
          num={countB}
          onAdd={this.handleAddA}
        />
      </div>
    )
  }
}

export default App