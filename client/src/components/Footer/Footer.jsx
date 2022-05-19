import React, { useContext } from "react";
import { themeContext } from '../../context/themeContext';

const Footer = () => {

  const {theme } = useContext(themeContext) //hook context

  return <footer className={`footer${theme}`}>Bienvenido a la intranet de ASEAF</footer>;
};

export default Footer;
