import React from 'react';
import SpellCard from './SpellCard';
import Select from 'react-select';
import SpellData from './SpellData';

class Home extends React.Component {
  state = {
    selectedSpellIndex: this.props.selectedSpellIndex
  }

  render() {
    const data = SpellData.getSpellData();
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
      <div>
        <Select
          value={this.state.selectedSpellIndex}
          onChange={this.props.onSpellChanged}
          options={options}
          isSearchable={true}
          placeholder="Type a spell here"
        />
        <SpellCard spell={selectedSpell} button={button} />
      </div>
    );
  }
}

export default Home;
