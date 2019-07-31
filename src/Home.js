import React from 'react';
import SpellCard from './SpellCard';
import data from '../data/spells.json';

class Home extends React.Component {
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
      const favorites = this.props.favorites;
      const selectedSpellIsInFavorites = favorites.some((favorite) => {
        return favorite.name === selectedSpell.name;
      });

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
            {
              selectedSpellIsInFavorites
                ? null 
                : <p><button onClick={() => this.props.addToFavorites(selectedSpell)}>Add to Favorites</button></p>

            }
            <SpellCard spell={selectedSpell}/>
        </div>
      );
  }
}

export default Home;
