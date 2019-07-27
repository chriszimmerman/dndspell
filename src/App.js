import React from 'react';
import data from '../data/spells.json';

class App extends React.Component {
  state = {
    selectedSpellIndex: 2
  }

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
            <h1>Dungions & Dragons 5th Edition Spell List</h1>
              <select>
                {
                  data.map((element, index) => {
                    return (<option value={index}>{element.name}</option>);
                  })
                }
              </select>

              {data[this.state.selectedSpellIndex].desc}
        </div>
      );
  }
}

export default App;
