import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Logging";
import Signup from "./Signup";

const AuthenticationState = {
  Login: 0,
  Signup: 1,
};

const Authentication = () => {
  axios.defaults.withCredentials = true;
  const [authenticationState, setAuthenticationState] = useState(
    AuthenticationState.Login
  );
  const [credentials, setCredentials] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const storeAuth = (artist) => {
    sessionStorage.setItem("artist", JSON.stringify(artist));
  };

  const handleSumbit = async () => {
    console.trace();
    if (authenticationState === AuthenticationState.Login) {
      const response = await axios.post("project/login", credentials);
      const { artist } = response.data;
      storeAuth(artist);
      navigate("/", { state: { artist } });
    } else {
      const response = await axios.post("project/signup", credentials);
      const { artist } = response.data;
      storeAuth(artist);
      navigate("/", { state: { artist } });
    }
  };

  const handleChange = (e) => {
    const newCredentials = { ...credentials };
    const { name, value } = e.target;
    newCredentials[name] = value;
    setCredentials(newCredentials);
  };

  return (
    <div>
      {authenticationState === AuthenticationState.Login ? (
        <div>
          <h1>Login</h1>
          <Login
            credentials={credentials}
            handleOnSubmit={handleSumbit}
            handleOnChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          <Signup
            credentials={credentials}
            handleOnSubmit={handleSumbit}
            handleOnChange={handleChange}
          />
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setAuthenticationState(AuthenticationState.Signup);
          }}>
          <p>Sign Up</p>
        </button>
        <button
          onClick={() => {
            setAuthenticationState(AuthenticationState.Login);
          }}>
          <p>Log In</p>
        </button>
      </div>
    </div>
  );
};

export default Authentication;
