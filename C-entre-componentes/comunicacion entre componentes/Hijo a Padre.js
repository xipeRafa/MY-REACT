import React, { Component } from 'react'



const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class Hijo extends Component {
  
  handleClick = (e) => {
     e.stopPropagation()
     e.saludo = 'Hola Mensaje desde el Hijo'
    console.log('Click en <Hijo />')
  }
  
  render () {
    return (
      <div style={boxStyles} onClick={this.handleClick}>
        <p>Hijo</p>
      </div>
    )
  }
}

class App extends Component {
  handleClick = (e) => {
    console.log('Click en <Padre />', e.saludo)
  }

  render () {
    return (
      <div style={boxStyles} onClick={this.handleClick}>
       
        <Hijo />
      </div>
    )
  }
}

export default App