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

  componentDidMount () {
    PubSub.subscribe('otro evento', (e, data) => {
      this.setState({
        message: data.title
      })
    })
  }

  componentWillUnmount () {
    PubSub.unsubscribe('otro evento')
  }

  handleClick = () => {
    PubSub.publish('saludo', 'Hola desde el Bisnieto')
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
    PubSub.subscribe('saludo', (e, data) => {
      alert(data)
    })
  }

  handleClick = () => {
    PubSub.publish('otro evento', {
      title: 'Hola desde <App />'
    })
  }

  render () {
    return (
      <div style={boxStyles}>
      
        <button onClick={this.handleClick}>
          PADRE
        </button>
      
        <Hijo />
      </div>
    )
  }
}

export default App