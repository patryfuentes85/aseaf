import React, {useContext} from "react";
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { userContext } from "../../../context/userContext";


const Logout = () => {

  const {logout} = useContext(userContext);

  const logoutuser = () => {
    logout()
  };


  return <AwesomeButton type="secondary" className="loguser"><button onClick={logoutuser} className="logoutbutton">Log out</button></AwesomeButton>;
};

export default Logout;
