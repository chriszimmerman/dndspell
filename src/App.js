import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';

class App extends React.Component {
  state = {
    selectedSpellIndex: 0,
    favorites: JSON.parse(window.localStorage.getItem('spells') || "[]")
  }

  addToFavorites = (spell, selectedSpellIndex) => {
    const newFavorites = this.state.favorites.concat(spell);
    this.setState({
      favorites: newFavorites,
      selectedSpellIndex
    }, () => {
      window.localStorage.setItem('spells', JSON.stringify(newFavorites));
    });
  }

  removeFromFavorites = (spellToRemove) => {
    let favorites = this.state.favorites;
    const indexOfSpellToRemove = favorites.findIndex((spell) => {
      return spell.name === spellToRemove.name;
    });
    favorites.splice(indexOfSpellToRemove, 1);
    this.setState({
      favorites
    }, () => {
      window.localStorage.setItem('spells', JSON.stringify(favorites));
    });
  }

  onSpellChanged = (event) => {
    this.setState({
      selectedSpellIndex: event.target.value 
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites/">Favorites</Link>
          </nav>

          <Route path="/"
            exact
            component={
              () => <Home 
                      favorites={this.state.favorites}
                      addToFavorites={this.addToFavorites}
                      selectedSpellIndex={this.state.selectedSpellIndex}
                      onSpellChanged={this.onSpellChanged}
                    />
            }
          />
          <Route 
            path="/favorites/" 
            component={
              () => 
                <Favorites
                  favorites={this.state.favorites }
                  removeFromFavorites={this.removeFromFavorites} 
                /> 
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
