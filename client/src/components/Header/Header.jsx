import React, {useContext} from "react";
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import logo from '../../assets/aseaf.jpg'
import { themeContext } from "../../context/themeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import { userContext } from "../../context/userContext";


const Header = () => {
   const { theme, toggleTheme } = useContext(themeContext); //hook context
   const {user} = useContext(userContext);

  return  <header className={`header${theme}`}>
              <img src={logo} alt='logo' style={{width: 160}}></img>
              <Nav/>
              <div id="extras">
               <DarkModeToggle
                     onChange={toggleTheme}
                      checked={theme}
                     size={80}
                  />
                   {user?
                  <div>
                   <Logout></Logout>
                  </div>
                  :<Login/>}
               </div>
              </header>;
};

export default Header;



