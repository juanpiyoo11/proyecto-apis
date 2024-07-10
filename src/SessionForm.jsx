import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/SessionForm.css"
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import RegisterForm from './RegisterForm';
const SessionForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const navigate = useNavigate();
 
  

  return (
    <div className="body">
      <div className="veen">
        
        <div className="wrapper">
          <form id="login"  style={{ display: isLoginActive ? 'block' : 'none' }}>
            <h3>Iniciar sesión</h3>
            <div className="mail">
              <input type="email" name="" />
              <label>Mail or Username</label>
            </div>
            <div className="passwd">
              <input type="password" name="" />
              <label>Password</label>
            </div>
            <div className="submit">
              <button className="dark">Login</button>
            </div>
            <br />
            <div className="submit">
              <button className="dark" onClick={() => navigate("/RegisterForm")}>Register</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SessionForm;

