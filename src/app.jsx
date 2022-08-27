import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      layout: Array(9).fill(null),
      winnerState: false,
      lastTurn: 'X'
      // 012(3), 345(12), 678(21), 036(9), 147(12), 258(15), 048(12), 246(12)
      // we'll have a function to check win/loss and update state for winnerstate
      // see if these combinations are about to be full and have same value
    };
    this.handleClick = this.handleClick.bind(this);
    // console.log(this.state.layout[0] = true);
  }

  handleClick(i){
    //slice to make copy of this.state.layout
    //manipulate the index of the array --> i --> 3 newArr[i] = newValue
    //setstate (newArr)
    
    // target-id
    // selects the cell we click on
    // to do turn based maybe use closure to remember what last invocation was
    // if last was x, then assign value of td to O <= setSet()
    // const newCohortNumbers = this.state.cohortNumbers.map(num=>num+1);
    // this.setState({cohortNumbers: newCohortNumbers});
    // console.log(e);
    // console.log('clicked');
    // variable => valid turn
    // while !valid turn
    let validTurn = false;
    while (!validTurn){
    const newArr = this.state.layout.slice();
    if (newArr[i] === null) {
      newArr[i] = this.state.lastTurn;
      this.setState({layout: newArr});
      validTurn = true;
    }
  }
    if (this.state.lastTurn === 'O') this.setState({lastTurn: 'X'});
    else this.setState({lastTurn: 'O'});
    // const X = this.props.layout.map((placement, index, array) => {
    //   // if (array[i]=== placement) placement = 'X';
    //   console.log(placement);
    // });
    // this.setState({layout: X});
  }
  
  render() {
    return (
      <>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <Board layout = {this.state.layout} key = {'Cell 0'} handleClick={this.handleClick}/>
      </>
    );
  }
}


class Board extends Component {
  
  constructor() {
    super();
  }

 

  // maybe give each cell unique id
  // access the props object to manipulate text inside Cell class
  // assign each cell a number and an array of two symbols to switch between
  //<Cell value={this.state.layout[0]} onCLick= {this.HandleClick}/>
  //<Cell value={this.state.layout[1]} onCLick= {this.HandleClick}/>

  // <tr><Cell/><Cell/><Cell/></tr>
  // <tr><Cell/><Cell/><Cell/></tr>
  // <tr><Cell/><Cell/><Cell/></tr>

  render() {
    // console.log(this.props,'object');
    // console.log(this.props.layout,'array');
    const cellStructure = [];
    // make a row variable
    // row.repeat
    for (let i = 0; i < 9; i+=3){
      // i = 0, i = 3, i = 6
      const row = <tr>
        <Cell value={this.props.layout[i]} key={`Cell ${i + 1}`} handleClick={this.props.handleClick} i={i}/>
        <Cell value={this.props.layout[i + 1]} key={`Cell ${i + 2}`} handleClick={this.props.handleClick} i={i + 1}/>
        <Cell value={this.props.layout[i + 2]} key={`Cell ${i + 3}`} handleClick={this.props.handleClick} i={i + 2}/>
      </tr>;
      cellStructure.push(row);
    }

    // for (let i = 0; i < this.state.cohortNumbers.length; i++){
    //   boxes.push(<Box 
    //                number={this.state.cohortNumbers[i]} 
    //                handleClick={this.handleClick} 
    //                handleDelete={this.handleDelete} 
    //                key={`Box${i}`} 
    //              />);
    // }

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

  // HandleClick(e){
  //   // target-id
  //   // selects the cell we click on
  //   // to do turn based maybe use closure to remember what last invocation was
  //   // if last was x, then assign value of td to O <= setSet()
  //   // const newCohortNumbers = this.state.cohortNumbers.map(num=>num+1);
  //   // this.setState({cohortNumbers: newCohortNumbers});
  //   // console.log(e);
  //   // console.log('clicked');
  //   // const X = this.props.layout.map((placement, index, array) => {
  //   //   // if (array[i]=== placement) placement = 'X';
  //   //   console.log(placement);
  //   // });
  //   // this.setState({layout: X});
  //   // this.setState({layout: 'X'});
  // }
  // access prop object here
  
  render() {
    // console.log(this.props);
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


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Tic Tac Toe</h1>
//       </div>
//     );
//   }
// }

render(<App />, document.querySelector('#root'));
