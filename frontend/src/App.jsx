import "./App.css";
import FormAuth from "./pages/FormAuth";
import React, { useState } from "react";

import { Form } from "react-hook-form"
import { useForm } from "react-hook-form"

function App() {
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('')
  const [user, setUser] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAuthorization = async () => {
    try {
      const response = await fetch('http://localhost:3100/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, number }),
      });

      if(!response.ok) {
        setUser([])
       return setErrorMessage('Данный пользователь не найден')
      }
    
    const data = await response.json();
    
     setUser(data)
     setErrorMessage('')
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="login-box">
      <h2>Войти</h2>
      <div>
      <div className="user-box">
      <input 
      value={email}
      onChange={handleEmail}
       />
      <input 
      value={number}
      onChange={handleNumber} 
      />
      
      </div>
      <button onClick={handleAuthorization} className="btn">Submit</button>
      <div className="data-class">
      <div>Пользователь: {user[0]}</div>
      <div>Номер: {user[1]}</div>
    </div>
    </div>
    
    <div className="errorMessage">
          {errorMessage}
        </div>
    </div>
  )
}
export default App;