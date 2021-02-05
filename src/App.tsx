import {  Component } from 'react';
import './App.css';
import { Board } from "./Board";

/*TODO:
+ Separate to files
+ Draw result
+ Restart button
*/

class App extends Component<{}> {

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
          </div>
        </div>
      );
    }
}

export default App;
