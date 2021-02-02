import React, { Component } from 'react'
import PubSub from 'pubsub-js'



const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class Bisnieto extends Component {
  state = {
    message: '*******'
  }

  handleClick = () => {
    this.setState({
      message: window.title
    })
  }

  render () {
    return (
      <div style={boxStyles}>
        <p>{ this.state.message }</p>
        <button onClick={this.handleClick}>
          NIETO
        </button>
      </div>
    )
  }
}

class Nieto extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <Bisnieto />
      </div>
    )
  }
}

class Hijo extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <Nieto />
      </div>
    )
  }
}

class App extends Component {
  componentDidMount () {
    window.title = 'React Es Cool!!'
  }

  handleClick = () => {
    window.title = '##########'
  }

  render () {
    return (
      <div style={boxStyles}>
        <button onClick={this.handleClick}>
          PADRE
        <Hijo />
      </div>
    )
  }
}

export default App