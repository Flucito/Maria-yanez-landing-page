import React from 'react';
import '../assets/css/style.css';

export const Nav = () => {
    return (
        <div className="container-nav">
            <div className="container-img"> 
                <img className="logo-1" src={require("../assets/img/logo.png")} alt="Logo" />
            </div>
            <div className="menu_nav">
                <ul className="list">
                    <li className="contents">Inicio</li>
                    <li className="contents">Noticias</li>
                    <li className="contents">Formulario</li>
                    <li className="contents">Contacto</li>
                    
                </ul>
            </div>
        </div>
    )
}