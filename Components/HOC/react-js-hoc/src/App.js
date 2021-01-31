import React from 'react';
import logo from './logo.svg';
import './App.css';

//HOC - High Order Component

//DECLARACIÓN
const withImpuestos = (Component) =>{
  return (pagos)=> class extends React.Component{

    state={
      sucursal: pagos.sucursal,
      pago: "$" + pagos.pago,
      impuesto: 
        "$" + (pagos.pago * pagos.impuesto) 
        + " al " + (pagos.impuesto*100) + "%",
      ganancia: "$" + (pagos.pago - (pagos.pago * pagos.impuesto))
    }

    calcularImpuesto = (pago)=>{
      this.setState({
        pago: "$" + pago,
        impuesto: 
          "$" + (pago * pagos.impuesto) 
          + " al " + (pagos.impuesto*100) + "%",
        ganancia: "$" + (pago - (pago * pagos.impuesto))
      })
    }

    render(){
      return(
        <Component
          sucursal={this.state.sucursal}
          pago={this.state.pago}
          impuesto={this.state.impuesto}
          ganancia={this.state.ganancia}
          calcularImpuesto={this.calcularImpuesto} />
      )
    }
  }
}

function App(props) {
  const {sucursal, pago, impuesto, ganancia, calcularImpuesto} = props;
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Impuestos sucursal {sucursal}</h1>

        <input type="number" onChange={(e)=>{calcularImpuesto(e.target.value)}} />

        <p>{"Pago: " + pago}</p>
        <p>{"Impuesto: " + impuesto}</p>
        <p>{"Ganancia: " + ganancia}</p>
    </div>
  );
}

export default withImpuestos(App)({
  sucursal:1,  //variables con valor por defecto
  pago:0,
  impuesto:0.16,
  ganancia:0
});
