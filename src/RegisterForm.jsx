import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/SessionForm.css"
import {signIn} from './js/UserService.js'

const RegisterForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      await signIn(id, name, email, password);
    } catch (error) {
      console.error("Register failed:", error);
    }
  }
 
  

  return (
    <div className="body">
      <div className="veen">
        
        <div className="wrapper">
          <form id="login"  style={{ display: isLoginActive ? 'block' : 'none' }}>
            <h3>Registrarme</h3>
            <div className="mail">
              <input type="text" name="" onChange={handleNameChange}/>
              <label>Nombre y Apellido</label>
            </div>
            <div className="mail">
              <input type="email" name="" onChange={handleEmailChange}/>
              <label>Mail</label>
            </div>
            <div className="mail">
              <input type="text" name="" onChange={handleIdChange}/>
              <label>Usuario</label>
            </div>
            <div className="passwd">
              <input type="password" name="" onChange={handlePasswordChange}/>
              <label>Password</label>
            </div>
            <div className="submit">
              <button className="dark" onClick={handleRegisterClick} >Enviar</button>
            </div>
            <br />
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

