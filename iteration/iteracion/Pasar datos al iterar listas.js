import React, { Component } from 'react'

class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],

    frutaSeleccionada: {} //aqui se almacena el objeto de la fruta a l cual le daremos click(linea_22)
  }

  select = (frutaSeleccionada, event) => {
    this.setState({
      frutaSeleccionada
    })
  }

  render () {
    const { fruits, frutaSeleccionada } = this.state  // Destricturin mamalon

    return (
      <ul>
        {fruits.map(fruit => (
          <li
            key={fruit.name}
            onClick={this.select.bind(this, fruit)} //select en linea 20
            style={{
              color: frutaSeleccionada.name === fruit.name
                ? 'red'
                : '#000'
            }}
          >
            { fruit.name } - $ { fruit.price }
          </li>
        ))}
      </ul>
    )
  }
}

export default App