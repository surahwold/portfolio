import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ppic from '../../assets/ppic.jpg';
import menuopen from '../../assets/menuopen.png';
import menuclose from '../../assets/menuclose.png';
import like from '../../assets/like.png';
import light from '../../assets/light.png';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [likes, setLikes] = useState(0); // State to track the number of likes
    const [theme, setTheme] = useState("light"); // State to track the theme
    const menuReF = useRef();

    const openMenu = () => {
        menuReF.current.style.right = "0";
    }

    const closeMenu = () => {
        menuReF.current.style.right = "-350px";
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const incrementLikes = () => {
        setLikes(likes + 1);
    }

    return (
        <div className={`navbar ${theme}`}>
            <img src={ppic} alt="" className='img'/>
            <img src={menuopen} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuReF} className='nav-menu'>
                <img src={menuclose} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li>
                    <Link className={`anchor-link ${theme}`} to='/' onClick={() => setMenu("home")}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={`anchor-link ${theme}`} to='/about' onClick={() => setMenu("about")}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`anchor-link ${theme}`} to='/portfolio' onClick={() => setMenu("portfolio")}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link className={`anchor-link ${theme}`} to='/contact' onClick={() => setMenu("contact")}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className={`anchor-link ${theme}`} to='/footer' onClick={() => setMenu("footer")}>
                        Footer
                    </Link>
                </li>
            </ul>
            <div className="nav-connect">
                <Link className={`anchor-link ${theme}`} to='/contact'>
                    Connect With Me
                </Link>
            </div>
            <button onClick={toggleTheme} className="theme-button">
                <img src={light} alt="Theme" />
            </button>
        </div>
    );
}

export default Navbar;