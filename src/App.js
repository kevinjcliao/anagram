import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleNewString(e, inputId){
    // TODO: Edit state
    console.log(e.target.value);
    console.log(inputId);
    let update = {};
    update[inputId] = e.target.value;
    /**
    this.setState(update, () => {
      console.log("State is now: ", this.state);
    });
    **/
    // TODO: Feed new state info as callback to isAnagram.
    // TODO: Set result of isAnagram in state.
  }
  isAnagram(string1, string2) {
    const sortedString1 = this.removePunctuation(string1)
                              .split("")
                              .sort()
                              .toString();
    const sortedString2 = this.removePunctuation(string2)
                              .split("")
                              .sort()
                              .toString();
    return sortedString1 === sortedString2;
  }
  // Taken from http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  removePunctuation(s){
    return s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  }
  render() {
    // TODO: Handle Binding properly.
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input type="text" onChange={this.handleNewString.bind("input1")} />
          <input type="text" onChange={this.handleNewString.bind("input2")} />
        </p>
      </div>
    );
  }
}

export default App;
