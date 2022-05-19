import React from "react";
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";

const Login = () => {
  return <>
  <Link to="/loginuser"><AwesomeButton type="secondary" className="loguser">Log in</AwesomeButton></Link>
  </>;
};

export default Login;


