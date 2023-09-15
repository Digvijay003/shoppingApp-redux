import React from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { login } from "../slices/auth-slice";

const Auth = () => {
  const dispatch=useDispatch()

  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(login())

  }
  return (
    <div className="container">
      
      <form>
       <h1>Click on Login button to continue</h1>
        <button className="login-btn" type="submit"onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
