
import React from 'react';
import './App.css';
import Card from './Components/Card/Card'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import playersData from 'src/Components/data/data.json'



function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    
      setPlayers(playersData);
      console.log(playersData);
  }, [])




  return (
    <div className="App">
      <h1>Total players: {players.length}</h1>
      {players.map((fplayer) => <Card footballPlayer={fplayer} />)}
    </div>
  );
}

export default App;
