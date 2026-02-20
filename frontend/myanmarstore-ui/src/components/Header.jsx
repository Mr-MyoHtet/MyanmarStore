import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlRice, faShoppingBasket,faTags,faSun,faMoon} from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons/faBowlFood";
import { useState,useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
const Header =() => {

    //Theme Color
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    });
    useEffect(()=> {
        if(theme == "dark"){
        document.documentElement.classList.add("dark");
       }
       else {
        document.documentElement.classList.remove("dark");
       }
    },[theme]);
   const toggleTheme=()=>{
    setTheme((prevThemeColor)=>{
       const newTheme= prevThemeColor === "light" ? "dark" : "light";
       //Using localStorage to store theme data in browser
       localStorage.setItem("theme",newTheme);
       return newTheme; // always retrn to the theme
    });
   }
    return(
        <header className="header dark:bg-darkbg dark:text-normalbg">
            <div  className="container">
                <Link to="/" className="link">
                <FontAwesomeIcon icon={faBowlRice} className="fa-icon"/>
                <span>Myanmar Food </span>
                </Link>
                <nav className="nav">
                    <button
                    className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}>
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-4 h-4 dark:text-light text-primary"></FontAwesomeIcon>
                    </button>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({isActive})=> isActive ? "underline":"nav-link"}>Home</NavLink>
                        </li>
                         <li>
                            <NavLink to="/about" className={({isActive})=> isActive ? "underline":"nav-link"}>About</NavLink>
                        </li>
                         <li>
                            <NavLink to="/contact" className={({isActive})=> isActive ? "underline":"nav-link"}>Contact</NavLink>
                        </li>
                         <li>
                            <NavLink to="/login" cclassName={({isActive})=> isActive ? "underline":"nav-link"}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="nav-link">
                            <FontAwesomeIcon  icon={faShoppingBasket} />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div> 
        </header>
    );
}
export default Header;