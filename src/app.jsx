import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      layout: Array(9).fill(null),
      gameOver: false,
      lastTurn: 'X',
      turnCounter: 1,
      winnerMessage: null
      // 012(3), 345(12), 678(21), 036(9), 147(12), 258(15), 048(12), 246(12)
      // we'll have a function to check win/loss and update state for winnerstate
      // see if these combinations are about to be full and have same value
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i){
    const newArr = this.state.layout.slice();
    if (newArr[i] === null) {
      newArr[i] = this.state.lastTurn;
      this.setState({layout: newArr});
      if (this.state.lastTurn === 'O') this.setState({lastTurn: 'X'});
      else this.setState({lastTurn: 'O'});
      const newCounter = this.state.turnCounter + 1;
      this.setState({turnCounter: newCounter});
      console.log(this.state.turnCounter);
      console.log(this.state.lastTurn);
    }
  }

  componentDidUpdate() {
    const app = this.state;
    if (!app.gameOver && app.turnCounter > 4) {
      //
      // 012, 345, 678, 036, 147, 258, 048, 246
      // we'll have a function to check win/loss and update state for winnerstate
      // see if these combinations are about to be full and have same value
      if ((app.layout[0] === app.layout[1] && app.layout[1] === app.layout[2] && app.layout[2] !== null) ||
          (app.layout[3] === app.layout[4] && app.layout[4] === app.layout[5] && app.layout[5] !== null) ||
          (app.layout[6] === app.layout[7] && app.layout[7] === app.layout[8] && app.layout[8] !== null) ||
          (app.layout[0] === app.layout[3] && app.layout[3] === app.layout[6] && app.layout[6] !== null) ||
          (app.layout[1] === app.layout[4] && app.layout[4] === app.layout[7] && app.layout[7] !== null) ||
          (app.layout[2] === app.layout[5] && app.layout[5] === app.layout[8] && app.layout[8] !== null) ||
          (app.layout[0] === app.layout[4] && app.layout[4] === app.layout[8] && app.layout[8] !== null) ||
          (app.layout[2] === app.layout[4] && app.layout[4] === app.layout[6] && app.layout[6] !== null)
      ) {
        const winner = this.state.lastTurn === 'X' ? 'O' : 'X';
        const winnerMessage2 = `Player ${winner} won!!!`;
        this.setState({winnerMessage: winnerMessage2});
        // set state
      }

    }


  }
  
  render() {
    return (
      <>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <Board layout = {this.state.layout} key = {'Cell 0'} handleClick={this.handleClick}/>
        {/* <p>{this.state.winnerMessage}</p> */}
      </>
    );
  }
}


class Board extends Component {
  
  constructor() {
    super();
  }

  render() {
   
    const cellStructure = [];
  
    for (let i = 0; i < 9; i+=3){
    
      const row = <tr>
        <Cell value={this.props.layout[i]} key={`Cell ${i + 1}`} handleClick={this.props.handleClick} i={i}/>
        <Cell value={this.props.layout[i + 1]} key={`Cell ${i + 2}`} handleClick={this.props.handleClick} i={i + 1}/>
        <Cell value={this.props.layout[i + 2]} key={`Cell ${i + 3}`} handleClick={this.props.handleClick} i={i + 2}/>
      </tr>;
      cellStructure.push(row);
    }


    // we want the Cell component to have access to the state of the app, which is two levels above
    // this state needs to be passed into value so we can alter the text displayed on the cell

    return (
      <div>
        <table>
          <tbody>
            {cellStructure}
          </tbody>
        </table>
      </div>
    );
  }
}

class Cell extends Component {

  constructor() {
    super();
  }


  // access prop object here
  
  render() {
    
    return (
      <td><button onClick={() => this.props.handleClick(this.props.i)}>{this.props.value}</button></td>
    );
  }
}



// we need 3 components: box, row, board
// 1 large component = board, 3x3 grid using html,
// make a div container, and inside it a table element
// inside table element, make a tbody
// table row (tr), have 3 squares (cells)
// x2 above, to have 9 cells

// we need to be able to click on a cell and have the symbol change to X or O
// We need an onclick property assigned to the cell itself
// this onclick function should change the text inside of the Cell class
// the state should be an array of arrays that contains the grid for the board
// we can make a method to set state to reassign whichever index inside of cell

// state will also have a wincondition property
// board will have access to state


render(<App />, document.querySelector('#root'));
