import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/SessionForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from './js/UserService';
import { setToken, setUser } from './store/authSlice';

const SessionForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const data = await login(id, password);
      dispatch(setToken(data.token));
      dispatch(setUser(data.record));
      navigate('/');
    } catch (error) {
      setErrorMessage('Login failed: ' + error.message);
      console.error("Login failed:", error);
    }
  };

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
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
