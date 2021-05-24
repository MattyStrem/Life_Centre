import React from "react";

import Background from './components/background/backround'
import Header from "./features/header/header"

//import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Background > 
        <p>Hello</p>
      </Background>

    </div>
  );
}

export default App;
