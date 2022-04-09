import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import PracticeBoard from "./Component/PracticeBoard";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <Board />
        {/* <PracticeBoard/> */}
      </div>
    );
  }
}

export default App;
