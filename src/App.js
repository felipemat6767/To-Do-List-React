import React from 'react';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const element =  <FontAwesomeIcon icon= {faTrash} />

function App() {
  
  const [valor, setValor] = useState([])
  const [input, setInput] = useState("")


const handlechange = (e) =>{
  setInput(e.target.value)
}

const AgregarItems = () => {
    setValor(nuevoarray => [...nuevoarray, input])
}

const removerlista = (i) => {
  setValor(nuevoarray => nuevoarray.filter((item, indice) => {
      return indice !== i
  }))
}

      const lista = valor.map((items, indice) => {
	      return (<li key ={indice} className="w-100">
          <span>{items}</span>
        <i className="text-align-center none" onClick ={() => {removerlista(indice)}}>{element}</i></li>
        )
      });

      const cantidad = lista.length
      console.log(cantidad)

  return (
    <div className="App w-25 m-auto">
        <input type="text" className="form-control" id="inputs" aria-describedby="emailHelp" placeholder ="¿ Que quieres hacer hoy ?" onChange = {handlechange} value = {input} /> 

        <ul className="p-0 w-100">
            <div className ="w-100">{lista}</div>
        </ul> 
        <p className ="cantidad">{cantidad} items pendientes</p> 
        <button type="button" className="btn btn-primary" onClick = {AgregarItems} >Agregar tareas</button>

        
    </div>
  );
}

export default App;
