import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagram: true,
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
    return s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s{2,}]/g,"");
  }
  render() {
    console.log(this.removePunctuation("A man, a plan, a caret, a ban, a myriad, a sum, a lac, a liar, a hoop, a pint, a catalpa, a gas, an oil, a bird, a yell, a vat, a caw, a pax, a wag, a tax, a nay, a ram, a cap, a yam, a gay, a tsar, a wall, a car, a luger, a ward, a bin, a woman, a vassal, a wolf, a tuna, a nit, a pall, a fret, a watt, a bay, a daub, a tan, a cab, a datum, a gall, a hat, a fag, a zap, a say, a jaw, a lay, a wet, a gallop, a tug, a trot, a trap, a tram, a torr, a caper, a top, a tonk, a toll, a ball, a fair, a sax, a minim, a tenor, a bass, a passer, a capital, a rut, an amen, a ted, a cabal, a tang, a sun, an ass, a maw, a sag, a jam, a dam, a sub, a salt, an axon, a sail, an ad, a wadi, a radian, a room, a rood, a rip, a tad, a pariah, a revel, a reel, a reed, a pool, a plug, a pin, a peek, a parabola, a dog, a pat, a cud, a nu, a fan, a pal, a rum, a nod, an eta, a lag, an eel, a batik, a mug, a mot, a nap, a maxim, a mood, a leek, a grub, a gob, a gel, a drab, a citadel, a total, a cedar, a tap, a gag, a rat, a manor, a bar, a gal, a cola, a pap, a yaw, a tab, a raj, a gab, a nag, a pagan, a bag, a jar, a bat, a way, a papa, a local, a gar, a baron, a mat, a rag, a gap, a tar, a decal, a tot, a led, a tic, a bard, a leg, a bog, a burg, a keel, a doom, a mix, a map, an atom, a gum, a kit, a baleen, a gala, a ten, a don, a mural, a pan, a faun, a ducat, a pagoda, a lob, a rap, a keep, a nip, a gulp, a loop, a deer, a leer, a lever, a hair, a pad, a tapir, a door, a moor, an aid, a raid, a wad, an alias, an ox, an atlas, a bus, a madam, a jag, a saw, a mass, an anus, a gnat, a lab, a cadet, an em, a natural, a tip, a caress, a pass, a baronet, a minimax, a sari, a fall, a ballot, a knot, a pot, a rep, a carrot, a mart, a part, a tort, a gut, a poll, a gateway, a law, a jay, a sap, a zag, a fat, a hall, a gamut, a dab, a can, a tabu, a day, a batt, a waterfall, a patina, a nut, a flow, a lass, a van, a mow, a nib, a draw, a regular, a call, a war, a stay, a gam, a yap, a cam, a ray, an ax, a tag, a wax, a paw, a cat, a valley, a drib, a lion, a saga, a plat, a catnip, a pooh, a rail, a calamus, a dairyman, a bater, a canal – Panama!"));
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
