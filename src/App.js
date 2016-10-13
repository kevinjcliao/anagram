import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
    console.log(this.isAnagram("hello", "olleh"));
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
