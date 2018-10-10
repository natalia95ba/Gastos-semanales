import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import FormularioGasto from './Formulario';
import Listado from './Listado';

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }
//agregar un gasto al state 
agregarGasto = gasto => {

//tomar una copia del state actual (hay vecez que el state 

const gastos = {...this.state.gastos};

//agregar el gasto al objeto y enviarlo por props
gastos[`gasto${Date.now()}`] = gasto;

console.log(gastos);

//ponerlo en el state
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
