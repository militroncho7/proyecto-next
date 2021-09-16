import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div className="footer">
            <p>Designed by <span>Víctor Ruiz &copy;</span> </p>
            <a href="https://www.linkedin.com/in/victormmorales/">
                <p>{date}</p>
            <img src="logo-vr.png" alt="logo-vr"/>
            </a>          
        </div>
    );
}
 
export default Footer;