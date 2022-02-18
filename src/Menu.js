import React from "react";
import { useState } from "react";



const Menu = () => {

    const[reproducir, setReproducir]= useState("")

    const Play = (reproducir) =>{
        return(
            console.log("Haciendo Cilck")
        )
        
    }


    return ( 
        <div className="controles" >
            <button type="button">A</button>
            <button type="button" onClick={Play}>P</button>
            <button type="button">N</button>
        </div>

    );
}

export default Menu;