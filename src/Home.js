import React from 'react';
import SpellCard from './SpellCard';
import Select from 'react-select';
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
      const options = data.map((spell, index) => {
        return { value: index, label: spell.name };
      });
      const button = selectedSpellIsInFavorites
        ? <button className="btn btn-warning" onClick={() => this.props.removeFromFavorites(selectedSpell)}>Unfavorite</button>
        : <button className="btn btn-success" onClick={() => this.props.addToFavorites(selectedSpell, this.state.selectedSpellIndex)}>Favorite</button>;

      return (
        <div className="container">
          <Select 
            value={this.state.selectedSpellIndex}
            onChange={this.props.onSpellChanged}
            options={options}
            isSearchable={true}
            placeholder="Search for a spell (e.g. Magic Missile)"
          />
          <SpellCard spell={selectedSpell} button={button}/>
        </div>
      );
  }
}

export default Home;
