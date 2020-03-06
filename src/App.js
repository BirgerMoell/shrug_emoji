import React from 'react';
import shrug_emoji from './shrug.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a target="_blank" href="https://www.avanza.se/aktier/topplistor.html/PRrDuDZT">
        <img src={shrug_emoji} className="App-logo" alt="logo" />
        </a>
        <p>
         Buy stuff!
        </p>

        <p>P.S. Don't buy stuff</p>


      </header>
    </div>
  );
}

export default App;
