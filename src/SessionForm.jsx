import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/SessionForm.css"
import { useNavigate } from "react-router-dom";
import RegisterForm from './RegisterForm';
import { login } from './js/UserService.js';

const SessionForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      await login(id, password);
      // Manejar el éxito del login (por ejemplo, redirigir a la página principal)
    } catch (error) {
      // Manejar errores de login
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="body">
      <div className="veen">
        <div className="wrapper">
          <form id="login" style={{ display: isLoginActive ? 'block' : 'none' }}>
            <h3>Iniciar sesión</h3>
            <div className="mail">
              <input type="text" name="" onChange={handleIdChange} />
              <label>Username</label>
            </div>
            <div className="passwd">
              <input type="password" name="" onChange={handlePasswordChange} />
              <label>Password</label>
            </div>
            <div className="submit">
              <button className="dark" onClick={handleLoginClick}>Login</button>
            </div>
            <br />
            <div className="submit">
              <button className="dark" onClick={() => navigate("/register")}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
