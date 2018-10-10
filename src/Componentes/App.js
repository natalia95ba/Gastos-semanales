import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import FormularioGasto from './Formulario';
import Listado from './Listado';

class App extends Component {

  /* puede crearse el state asi: 
  constructor(props) {
  super(props);
  this.sate = {
    gastos:{}
  } */
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }
//agregar un gasto al state 
agregarGasto = gasto => {

//tomar una copia del state actual (hay vecez que el state 
//esta vacío pero otras No y por eso la copia), lo 
//lo hacemos con spread operate
const gastos = {...this.state.gastos};

//agregar el gasto al objeto y enviarlo por props
//para eso lo hacemos con una llave
//trabajamos con gastos por ahi almacenamos la copia
//[`gasto${Date.now()}`] es para poner el gasto con fecha
gastos[`gasto${Date.now()}`] = gasto;

console.log(gastos);



//ponerlo en el state
//siempre para agregar algo a state será con setState
this.setState({
  gastos : gastos
})


}

  render() {
    return (
      <div className='App container'>
       <Header
       titulo='Gasto Semanal'
       /> 
       <div className='contenido-principal contenido'>
         <div className='row'>
           
           <div className='one-half column'>
           <FormularioGasto 
           agregarGasto={this.agregarGasto}
           />
           </div>
           <div className='one-half column'>
           {/* hay que enviarle por props el state a los gastos */}
           <Listado
           gastos={this.state.gastos}
           />
           
           </div>
         
         </div>
       
       </div>

      </div>
    );
  }
}

export default App;
