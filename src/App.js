import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagram: false,
      input1: "",
      input2: ""
    };
  }
  handleNewString(inputId, e){
    // TODO: Edit state
    let update = {};
    update[inputId] = e.target.value;
    this.setState(update, this.isAnagram);
  }
  isAnagram() {
    console.log("isAnagram called for state: ", this.state);
    const sortedString1 = this.removePunctuation(this.state.input1)
                              .split("")
                              .sort()
                              .toString();
    const sortedString2 = this.removePunctuation(this.state.input2)
                              .split("")
                              .sort()
                              .toString();
    this.setState({
      anagram: sortedString1 === sortedString2
    });
  }
  // Taken from http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  removePunctuation(s){
    return s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  }
  render() {
    if(this.state.anagram){
      console.log("BOOM! ANAGRAM.");
    }
    return (
      <div className="App">
        {this.state.anagram ? <b>ANAGRAM.</b> : <p>Not an anagram.</p>}
        <p className="App-intro">
          <input
              type="text"
              onChange={this.handleNewString.bind(this, "input1")}
          />
          <input
              type="text"
              onChange={this.handleNewString.bind(this, "input2")}
          />
        </p>
      </div>
    );
  }
}

export default App;
