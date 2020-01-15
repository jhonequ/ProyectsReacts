import React from 'react';
import logo from './assets/Images/logo.svg';
import './assets/CSS/App.css';

//Importar Componentes
import MiComponente from './components/MiComponente';

function holamundo(texto, edad){
  var presentacion =
    <div> 
      <h2>Hola, soy {texto}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  return presentacion;
}

function App() {
var nombre ="Jhon Ediver";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido al curso de react
        </p>
        {holamundo(nombre,26)}
        
        <section className="componentes">
          <MiComponente />
          <MiComponente />
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
