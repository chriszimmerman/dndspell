import React from 'react';
import data from '../data/spells.json';

class App extends React.Component {
  state = {
    selectedSpellIndex: 0
  }

  onSpellChanged = (event) => {
    this.setState({
      selectedSpellIndex: event.target.value 
    });
  };

  constructor(props) {
    super(props);
  }

  render() {
      const selectedSpell = data[this.state.selectedSpellIndex];

      return (
        <div>
            <h1>D&D 5th Ed. Spells</h1>
            <p></p>
            <select onChange={this.onSpellChanged}>
              {
                data.map((element, index) => {
                  return (<option value={index}>{element.name}</option>);
                })
              }
            </select>
            <h2>{selectedSpell.name}</h2>
            <h3>{selectedSpell.level} spell</h3>
            <p>Components: {selectedSpell.components}</p>
            <p>Material: {selectedSpell.material}</p>
            <p>Ritual: {selectedSpell.ritual}</p>
            <p>Concentration: {selectedSpell.concentration}</p>
            <p>Range: {selectedSpell.range}</p>
            <p>Casting Time: {selectedSpell.casting_time}</p>
            <p>Duration: {selectedSpell.duration}</p>
            <p>School: {selectedSpell.school}</p>
            <p>Classes: {selectedSpell.class}</p>
            <p>{selectedSpell.desc}</p>
            <p>{selectedSpell.higher_level}</p>
        </div>
      );
  }
}

export default App;
