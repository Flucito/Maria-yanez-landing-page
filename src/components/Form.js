import React from 'react'

export const Form = () => {
    return (

            <form action="action_page.php">
                <div class="row">
                <div class="col-25">
                    <label for="fname">Nombre</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Tu nombre" />
                </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="lname">Apellido</label>
                </div>
                <div class="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Tu apellido" />
                </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="country">País</label>
                </div>
                <div class="col-75">
                    <select id="country" name="country">
                    <option value="australia">Chile</option>
                    <option value="canada">Argentina</option>
                    <option value="usa">Perú</option>
                    </select>
                </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="subject">Mensaje</label>
                </div>
                <div class="col-75">
                    <textarea id="subject" name="subject" placeholder="Escribe algo aquí..." style={{height:"200px"}}></textarea>
                </div>
                </div>
                <div class="row">
                <input type="submit" value="Enviar" />
                </div>
            </form>
            
                )
            }
