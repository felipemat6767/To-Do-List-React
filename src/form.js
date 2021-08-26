import React from 'react';
import './App.css';
import { useState } from "react";


export const Funcion = () => {
const [data, setData] = useState({
    email: "",
    password:""
})

const cambios = (e) =>{
     setData({...data, [e.target.name] : [e.target.value] })
}

const introducircambios = (e) =>{
  e.preventDefault()
  console.log("Hello")
}

return <form className="row g-3" onSubmit ={introducircambios}>
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" className="form-control" id="staticEmail2" onChange ={cambios}  value ={setData.email} name="email" /> 
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" onChange ={cambios} value ={setData.password} name="password" />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3" >Confirm identity</button>
  </div>
</form>
}

