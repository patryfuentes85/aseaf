import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">Iniciar Sesion</Link>
      <Link to="/landings" className="nav__element">Proponer Eventos</Link>
      <Link to="/neas" className="nav__element">Enviar correos</Link>
    </div>;
  }
}

export default Nav;