import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      layout: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
      },
      winnerState: false,
      // 012(3), 345(12), 678(21), 036(9), 147(12), 258(15), 048(12), 246(12)
      // we'll have a function to check win/loss and update state for winnerstate
      // see if these combinations are about to be full and have same value
    };
  }
  
  render() {
    return (
      <>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <Board/>
      </>
    );
  }
}

class Board extends Component {
  
  constructor() {
    super();
  }

  HandleClick(){
    // target-id
  }

  // maybe give each cell unique id
  // access the props object to manipulate text inside Cell class
  // assign each cell a number and an array of two symbols to switch between
  //<Cell number = {} handleClick= {}/>
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr><Cell/><Cell/><Cell/></tr>
            <tr><Cell/><Cell/><Cell/></tr>
            <tr><Cell/><Cell/><Cell/></tr>
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
      <td>I'm a Cell</td>
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
