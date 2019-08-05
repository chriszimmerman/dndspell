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
      const button = selectedSpellIsInFavorites
        ? <button className="btn btn-warning" onClick={() => this.props.removeFromFavorites(spell)}>Unfavorite</button>
        : <button className="btn btn-success" onClick={() => this.props.addToFavorites(selectedSpell, this.state.selectedSpellIndex)}>Favorite</button>;

      return (
        <div class="container">
          <select onChange={this.props.onSpellChanged} value={this.state.selectedSpellIndex}>
            {
              data.map((element, index) => {
                  return <option value={index}>{element.name}</option>;
              })
            }
          </select>
          <SpellCard spell={selectedSpell} button={button}/>
        </div>
      );
  }
}

export default Home;
