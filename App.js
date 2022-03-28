import './App.css';
import React from 'react';
import {useState} from 'react';

class Persona extends React.Component
{
  state={
    clave:1,nombre:"ivan",apellido:"polanco",
    nacimiento:1986,
  }
  render()
  {
    return(
      <div>
        esta es una persona
        <table>
        <tr>
          <th>Clave</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>nacimiento</th>
        </tr>
          <tr>
        <td>{this.state.clave}</td>
        <td>{this.state.nombre}</td>
        <td>{this.state.apellido}</td>
        <td>{this.state.nacimiento}</td>
        </tr>
        </table>
      </div>
    );
  }

}

function Otra_persona()
{
  const[persona,crear_persona]=useState([
    {clave:1,nombre:'ivan',apellido:'polanco',nacimiento:1986},
    {clave:2,nombre:'juan',apellido:'lopez',nacimiento:2000},
    {clave:3,nombre:'jose',apellido:'perez',nacimiento:2000},
  ])
  
  const agregar=()=>
  {
    let nueva_persona=
    {clave:4,nombre:'pedro',apellido:'ramirez',nacimiento:1980}
    crear_persona([...persona,nueva_persona])
  }

  return(
    <div>
       <table>
        <tr>
        <th>
            clave
          </th>
          <th>
            nombre
          </th>
          <th>
            apellido
          </th>
          <th>
            nacimiento
          </th>
        </tr>
          {
            persona.map((persona2,index)=>
            (
              <tr key={index}>
              <td>{persona2.clave}</td>
              <td>{persona2.nombre}</td>
              <td>{persona2.apellido}</td>
              <td>{persona2.nacimiento}</td>
              </tr>
            ))
          }
        </table> 
        <button onClick={agregar}>Click</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        una persona creada con state
        <Persona></Persona>
        otra persona con hooks
        <Otra_persona></Otra_persona>
      </header>
    </div>
  );
}

export default App;
