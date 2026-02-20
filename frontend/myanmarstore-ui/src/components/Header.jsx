import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlRice, faShoppingBasket,faTags,faSun,faMoon} from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons/faBowlFood";
import { useState,useEffect } from "react";
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
                <a href="/" className="link">
                <FontAwesomeIcon icon={faBowlRice} className="fa-icon"/>
                <span>Myanmar Food </span>
                </a>
                <nav className="nav">
                    <button
                    className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}>
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-4 h-4 dark:text-light text-primary"></FontAwesomeIcon>
                    </button>
                    <ul>
                        <li>
                            <a href="/home" className="nav-link">Home</a>
                        </li>
                         <li>
                            <a href="/about" className="nav-link">About</a>
                        </li>
                         <li>
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                         <li>
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li>
                            <a href="/cart" className="nav-link">
                            <FontAwesomeIcon  icon={faShoppingBasket} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </header>
    );
}
export default Header;