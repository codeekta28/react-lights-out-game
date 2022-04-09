import React, { Component } from "react";
import "../Board.css";
import PracticeCell from "./PracticeCell";

export class PracticeBoard extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    litChances: 0.15,
  };
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      hasWon: false,
    };
  }
  //   creating board of true false for state
  createBoard() {
    const { nrows, ncols, litChances } = this.props;
    let board = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < litChances);
      }
      board.push(row);
    }
    return board;
  }
  //   creating table from board to show on ui
  showTable() {
    const { board } = this.state;
    let table = board.map((row, rindex) => (
      <tr key={rindex}>
        {row.map((col, cindex) => {
          let coord = `${rindex}-${cindex}`;
          return (
            <PracticeCell
              key={coord}
              litChance={col}
              flipCell={() => this.flipCell(coord)}
            />
          );
        })}
      </tr>
    ));
    return table;
  }
  // flipping the cell function
  flipCell(coord) {
    const { nrows, ncols } = this.props;
    // console.log("This is flipping cell", coord.split("-").map(Number));
    let [y, x] = coord.split("-").map(Number);
    const { board } = this.state;
    let newBoard = this.state.board.map((cells) => cells);

    function flipping(y, x) {
      if (x >= 0 && x < nrows && y >= 0 && y < ncols) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }
    flipping(y, x);//changing exact cell
    flipping(y-1,x);//changing above
    flipping(y+1,x);//Changing below
    flipping(y,x-1);//changing left
    flipping(y,x+1);//Changing right

    // when the user win is the situation when all the cells are false
    let hasWonCalc=newBoard.every(row=>row.every(col=>!col))

    this.setState({
      board: newBoard,
      hasWon:hasWonCalc,
    });
  }
  render() {
    console.log(Math.random() < 0.25);
    if(this.state.hasWon){
        return <h1>You Won</h1>
    }
    return (
      <div className="Board">
        <table>
          <tbody>{this.showTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default PracticeBoard;
