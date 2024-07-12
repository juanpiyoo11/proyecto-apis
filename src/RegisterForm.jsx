import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/registerForm.css";
import { signIn } from './js/UserService.js';

const RegisterForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault(); // Prevent page navigation

    if (name && email && id && password) {
      try {
        await signIn(id, name, email, password);
        setIsRegistered(true); // Set registration status to true
        setErrorMessage('¡Te has registrado con éxito!'); // Set success message
        setName(''); // Clear input fields
        setEmail('');
        setId('');
        setPassword('');
      } catch (error) {
        console.error("Register failed:", error);
        setErrorMessage('No se pudo registrar. Intente nuevamente.');
      }
    } else {
      setErrorMessage('Debe completar todos los campos para registrarse.');
    }
  };

  return (
    <div className="body">
      <div className="veen">
        <div className="wrapper">
          <form id="login" style={{ display: isLoginActive ? 'block' : 'none' }}>
            <h3>Registrarme</h3>
            <div className="mail">
              <input
                type="text"
                name=""
                value={name}
                onChange={handleNameChange}
              />
              <label>Nombre y Apellido</label>
            </div>
            <div className="mail">
              <input
                type="email"
                name=""
                value={email}
                onChange={handleEmailChange}
              />
              <label>Mail</label>
            </div>
            <div className="mail">
              <input
                type="text"
                name=""
                value={id}
                onChange={handleIdChange}
              />
              <label>Usuario</label>
            </div>
            <div className="passwd">
              <input
                type="password"
                name=""
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
            </div>
            {errorMessage && <p className={errorMessage === '¡Te has registrado con éxito!' ? 'success' : 'error'}>{errorMessage}</p>}
            <div className="submit">
              <button className="dark" onClick={handleRegisterClick}>
                Enviar
              </button>
            </div>
            <br />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
