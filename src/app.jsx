import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      myName: 'Chris',
      className: 'CTRI 11'
    };
  
  }

  

  
  render() {
    return (
      <>
        <div className="parent">
          <h1>PARENT COMPONENT</h1>
          <Child state={this.state}/>
        </div>
      </>
    );
  }
}


class Child extends Component {
  // props object is here, but hidden (sort of)
  // constructor() {
  //   super();
  // }

  render() {
   
    
    return (
      <div className='child'>
        <Grandchild state={this.props.state}/>
      </div>
    );
  }
}

class Grandchild extends Component {

  // constructor() {
  //   super();
  // }


  
  render() {
    
    return (
   
      <div className='grandchild'>
        {this.props.state.myName}
        {console.log(this.props.state)}
        <GreatGrandchild state={this.props.state} />
        <GreatGrandchild state={this.props.state} />
        <GreatGrandchild state={this.props.state} />
      </div>
        
    
    );
  }
}

class GreatGrandchild extends Component {

  // constructor() {
  //   super();
  // }

  
  render() {
    
    return (
      <div className='greatgrandchild'>
        {this.props.state.myName = "Evan"}
        I am in the class {this.props.state.className}
        {/* {console.log(this.props.state)} */}
      </div>
    );
  }
}




render(<App />, document.querySelector('#root'));
