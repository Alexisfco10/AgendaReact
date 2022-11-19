import React from "react";
import "../App.css";
import Listar from "./Padre";
import { Guardar } from "./Padre";

export function App() {
    return (<div>    
        <section className="formulario">
    <h1>Agenda</h1>
    <form>
        <div className="agenda">
            <label>Nombre: </label>
            <input type="text"  id="nombre"/>
        </div>

        <div className="agenda">
            <label>Apellido: </label>
            <input type="text" id="apellido"/>
        </div>

        <div className="agenda">
            <label>Telefono: </label>
            <input type="text" id="telefono"/>
        </div>

        <div className="botones">
            <input onClick={Guardar} type="submit" value="Guardar datos" id="Guardar"/>
        </div>

    </form>
</section>

<div className="lista" id="listas">
    <h1>Contactos:</h1>
    <Listar />
</div></div>)

}