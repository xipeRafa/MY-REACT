import React, { Component } from 'react'

class Hijo extends Component {
  state = {
    message: '****'
  }

  dispatchAlert = (e, message = 'Alert desde el Hijo') => {
    alert(message)
    this.setState({ message })
  }

  render () {
    return (
      <div>
        <h2>{ this.state.message }</h2>
        <button onClick={this.dispatchAlert}>
          Hijo
        </button>
      </div>
    )
  }
}

class App extends Component {
  hijo = React.createRef()

  handleClick = () => {
    this.hijo.current.dispatchAlert(null, 'Hola desde el Padre')
  }

  render () {
    return (
      <div>
         <Hijo ref={this.hijo} />
         
        <button onClick={this.handleClick}>
          Padre
        </button>
      </div>
    )
  }
}

export default App