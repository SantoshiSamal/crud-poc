import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttoncomponent from "./Component/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<Buttoncomponent/>
        </a>
      </header>
    </div>
  );
}

export default App;
