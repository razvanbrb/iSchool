import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const iconMenu = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);
    return ( < >
        <
        nav className = "navbar" >

        <
        div className = "navbar-icon" >
        <
        Link to = "/"
        className = "navbar-logo"
        onClick = { closeMobileMenu } >
        <
        i class = "fas fa-school" > < /i>   < /
        Link > <
        div className = "menu-icon"
        onClick = { iconMenu } >
        <
        i className = { click ? 'fas fa-times' : 'fas fa-bars' }
        /> < /
        div >

        <
        ul className = { click ? 'nav-menu active' : 'nav-menu' } >
        <
        li className = "nav-item" >
        <
        Link to = '/Info'
        className = "nav-links"
        onClick = { closeMobileMenu } > Info <
        /Link>   < /
        li > <
        li className = "nav-item" >
        <
        Link to = '/Sign In'
        className = "nav-links"
        onClick = { closeMobileMenu } > Sign In < /Link>  < /
        li > <
        li className = "nav-item" >
        <
        Link to = '/Sign Up'
        className = "nav-links"
        onClick = { closeMobileMenu } > Sing Up <
        /Link>  < /
        li >

        <
        /ul>   < /
        div > <
        /nav> < / >
    )

}


export default Navbar