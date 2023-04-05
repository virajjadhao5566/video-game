import './App.css';
import React, { useState } from 'react';
function App() {
  const [gameTitle,setGameTitle] = useState("")
  const searchGame = () =>{
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`)
    .then((response) =>response.json())
    .then((data)=>{
      console.log(data)
    })
  }
  return (
    <div className="App">
      <div className = "searchSection">
        <h1>Search For a Game</h1>
        <input 
          type="text" 
          placeholder='Minecraft...'
          onChange={(event)=>{
            setGameTitle(event.target.value)
          }}
        />
        <button onClick={searchGame}>Search Game</button>
      </div>
      <div className = "dealSection">

      </div>
    </div>
  );
}

export default App;
