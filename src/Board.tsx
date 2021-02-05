import { Component } from 'react';
import { BoardState } from './interfaces';
import { calculateWinner } from "./helpers";
import { Square } from "./Square";

export class Board extends Component<{}, BoardState> {
  
    constructor(props: {}) {
      super(props)
      this.state = {
        xIsNext: true,
        winner: null,
        squares: Array(9).fill(null)
      }
  
    }

    clear() {
      this.setState(
        {
          xIsNext: true,
          winner: null,
          squares: Array(9).fill(null)
        }
      )
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
      else if (this.state.squares.every(element => element != null) && this.state.winner == null) {
        status = 'Ничья'
      }
      else {
        status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
      <div>
        <div className='status'>
          {status}
        </div>
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
        <div>
          <button onClick={() => this.clear()}>
            Restart
          </button>
        </div>
      </div>
      
      );
    }
  
  }