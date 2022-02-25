import React from 'react';
import { useEffect, useState } from 'react';

import { ListGroup } from 'react-bootstrap';

import './scss/app.scss';
import Menu from './Menu';

function App() {

  const[lista, setLista] = useState([]);
  
  const[songurl, setSongurl] = useState("");
  const[songid, setSongid] = useState("");

  useEffect(() => {
		getList();
	}, []);

  const getList = async () => {
		const data = await fetch('https://assets.breatheco.de/apis/sound/songs',{
      'method':'GET',
      headers : {
          'Content-Type':'application/json'
      }, 
    })
		const cancion = await data.json();
		setLista(cancion);
	};

  return (
    <>
        <h1 className="titulo">Music Player con React</h1>

          <ListGroup as="ol" numbered className="ol">
          {
            lista.map( cancion => (
              <ListGroup.Item as="li" 
              onClick= { e => {
                //console.log("test");
                //console.log(cancion.url);
                setSongurl(cancion.url)
                setSongid(cancion.id)
                }
              }>
                
                {cancion.name} 
                
              </ListGroup.Item>
                
            ))}
          </ListGroup>

          <Menu 
              url = {songurl}
              id = {songid}
              canciones = {lista}
          />
      
    </>
  );
}

export default App;
