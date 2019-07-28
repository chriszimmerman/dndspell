import React from 'react';
import SpellCard from './SpellCard';
import data from '../data/spells.json';

class App extends React.Component {
  state = {
    selectedSpellIndex: 0,
    favorites: JSON.parse(window.localStorage.getItem('spells') || "[]")
  }

  onSpellChanged = (event) => {
    this.setState({
      selectedSpellIndex: event.target.value 
    });
  };

  addToFavorites = (spell) => {
    var newFavorites = this.state.favorites.concat(spell);
    this.setState({
      favorites: newFavorites
    }, () => {
      window.localStorage.setItem('spells', JSON.stringify(newFavorites));
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
      const selectedSpell = data[this.state.selectedSpellIndex];
      const favorites = this.state.favorites;
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
                : <p><button onClick={() => this.addToFavorites(selectedSpell)}>Add to Favorites</button></p>

            }
            <SpellCard spell={selectedSpell}/>

            <h1>Favorites</h1>
            {
              favorites.map((spell) => {
                return (<SpellCard spell={spell}/>);
              }) 
            }
        </div>
      );
  }
}

export default App;
