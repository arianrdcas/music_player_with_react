import React from "react";
import './App.css';
import { useState } from "react";
import {AiFillFastBackward, AiFillFastForward, AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import {Howl} from "howler";
import { Container, Button  } from "react-bootstrap";



const Menu = (props) => {

    const url = "https://assets.breatheco.de/apis/sound/";

    const[estado, setEstado] = useState(false);

    const[musica, setMusica]= useState("");

    const[idsound, setIdsound] = useState(null);

    const sounplay = (src, ids) =>{
        const sound = new Howl({
            src,
            html5:true
        })

        //console.log(sound);

        setMusica(sound);

        setIdsound(ids);

        setEstado(true);
        sound.play();
    }

    const sounstop = () => {
        //console.log("stop")
        musica.stop();
        setEstado(false);
	};

    const sounback = (listacanciones) =>{
        sounstop();
        const idback = idsound - 1;
        const a = listacanciones.find(p => p.id === idback).url;
        
        const  src = url+ a
        const sound = new Howl({
            src,
            html5:true
        })

        setMusica(sound);

        setEstado(true);
        sound.play();
        setIdsound(idback);
    };

    const sounnext = (listacanciones) =>{
        sounstop();
        const idnext = idsound + 1;
        const a = listacanciones.find(p => p.id === idnext).url;
        
        const  src = url+ a
        const sound = new Howl({
            src,
            html5:true
        })

        setMusica(sound);

        setEstado(true);
        sound.play();
        setIdsound(idnext);
    };

    return ( 
        <div className="menu d-flex justify-content-evenly bg-dark fixed-bottom">
            <Button className="btn btn-dark  position-relative fs-3" id = "back" type="button" onClick={e => {sounback(props.canciones);}}><AiFillFastBackward/></Button >
            
            { !estado? 

                <Button className="btn btn-dark  position-relative fs-3" id = "play" type="button" onClick={e => {sounplay(url+props.url, props.id);}}>< AiFillPlayCircle/></Button > : <Button className="btn btn-dark position-relative fs-3" id = "pausa" type="button"  onClick={e => {sounstop(url+props.url);}}><AiFillPauseCircle/> </Button> 
            }

            <Button className="btn btn-dark  position-relative fs-3" id = "next" type="button" onClick={e => {sounnext(props.canciones);}}><AiFillFastForward/></Button >
        </div>

    );
}

export default Menu;

