import React, { FunctionComponent, Component } from 'react';
import './App.css';
import {SquareProps, BoardState} from './interfaces';
import { calculateWinner } from "./helpers";



const Square: FunctionComponent<SquareProps> = ({value, onClick}) => 
      <button className='square' onClick={onClick}>
        {value}
      </button>

class Board extends Component<{}, BoardState> {
  
  constructor(p: {}) {
    super(p)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null
    }

  }

  handleClick(i: number) {
    const squares = this.state.squares.slice()
    if (this.state.winner || squares[i]) {return}

    squares[i] = this.state.xIsNext? 'X': 'O';

    const winner = calculateWinner(squares);    

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      winner: winner
    })
    console.log(this.state)
  }

  renderSquare(i: number) {
    return (
      <Square 
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      >

      </Square>
    )
  }

  render() {
    let status: string
    if (this.state.winner) {
      status = 'Выиграл ' + this.state.winner;
    }
    else {
      status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
    <div>
    <div className="status">{status}</div>
    <div className="board-row">
      {this.renderSquare(0)}
      {this.renderSquare(1)}
      {this.renderSquare(2)}
    </div>
    <div className="board-row">
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
    </div>
    <div className="board-row">
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
    </div>
  </div>
    );
  }

}

class App extends Component<{}> {

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default App;
