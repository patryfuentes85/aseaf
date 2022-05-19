import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './styles/styles.scss'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import {themeContext} from './context/themeContext';
import {userContext} from './context/userContext';

function App() {
//para aplicar el modo noche, lo pasamos a traves de theme context
const [theme, setTheme] = useState("");
  const toggleTheme = () => theme===""?setTheme("-dark"):setTheme("");
  const [user, setUser] = useState(""); //hook UseState

  const themeData = {
    theme,
    toggleTheme
  }

  //login
const login = (name) =>{
  setUser(name);
}

//logout
const logout = () =>{
 setUser("");
}

const userdata = {
  user,
  login,
  logout
}

  return (
    <div className="App">
      <themeContext.Provider value={themeData}>
      <BrowserRouter>
      <userContext.Provider value={userdata}>
      <Header/>
      <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
      </themeContext.Provider>
    </div>
  )
}

export default App