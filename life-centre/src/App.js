import React from "react";

import Background from './features/backgroundImage/backroundImage'
import Header from "./features/header/header"

import BackgroundImageLeftControl from './features/backgroundImage/components/backgroundImageLeftControl';
import BackgroundImageRightControl from './features/backgroundImage/components/backgroundImageRightControl';

//import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      
      <Background /> 
      <Header />
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>

      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      
        
      

    </div>
  );
}

export default App;
