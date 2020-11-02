import React from 'react'

export const News = () => {
    return (
        <div className="container_news">
            
            <div className="card">
                <img className="card1" src={require("../assets/img/new1.jpeg")} alt="Primera-Noticia" />
            
            <div className="content">
                <h3>Un verano seguro</h3>
                 <p>Este 2020 McDonald’s y autoridades incentivan un verano seguro en las playas de La Serena y Viña del Mar</p>
            </div>
</div>
            <div className="card">
                <img className="card2" src={require("../assets/img/new2.jpg")} alt="Segunda-Noticia" />  
            </div>
            <div className="content">
                <h3>¡5 premios que nos llenan de orgullo!</h3>
                <p>Nuestra compañía consigue 5 Premios gracias a sus campañas comunicacionales</p>
            </div>
            <div className="card">
                <img className="card3" src={require("../assets/img/new3.jpg")} alt="Tercera-Noticia" />  
            </div>
            <div className="content">
                <h3>Hay que cuidarse!</h3>
                <p>Más de 40 locales de comida rápida se abren en la comuna de maipú.</p>
            </div>
         </div>
        
        
    )
}
