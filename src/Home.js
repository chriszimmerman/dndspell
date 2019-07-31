import React from 'react';
import SpellCard from './SpellCard';
import data from '../data/spells.json';

class Home extends React.Component {
  state = {
    selectedSpellIndex: this.props.selectedSpellIndex
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
            <select onChange={this.props.onSpellChanged} value={this.state.selectedSpellIndex}>
              {
                data.map((element, index) => {
                    return <option value={index}>{element.name}</option>;
                })
              }
            </select>
            {
              selectedSpellIsInFavorites
                ? null
                : <p><button onClick={() => this.props.addToFavorites(selectedSpell, this.state.selectedSpellIndex)}>Add to Favorites</button></p>

            }
            <SpellCard spell={selectedSpell}/>
        </div>
      );
  }
}

export default Home;
