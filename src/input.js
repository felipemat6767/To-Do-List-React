import React from 'react';
import './App.css';
import { useState } from "react";



export const Input = () =>{
    const Array =[1,2,3,4,5]
    return (
        Array.map((elemento,i) => {
            return <li key={i}>{elemento}</li>;
        })
    )

}

