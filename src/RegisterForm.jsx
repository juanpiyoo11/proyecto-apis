import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/SessionForm.css"

const RegisterForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

 
  

  return (
    <div className="body">
      <div className="veen">
        
        <div className="wrapper">
          <form id="login"  style={{ display: isLoginActive ? 'block' : 'none' }}>
            <h3>Registrarme</h3>
            <div className="mail">
              <input type="email" name="" />
              <label>Nombre y Apellido</label>
            </div>
            <div className="mail">
              <input type="email" name="" />
              <label>Mail</label>
            </div>
            <div className="mail">
              <input type="email" name="" />
              <label>Usuario</label>
            </div>
            <div className="passwd">
              <input type="password" name="" />
              <label>Password</label>
            </div>
            <div className="submit">
              <button className="dark">Enviar</button>
            </div>
            <br />
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

