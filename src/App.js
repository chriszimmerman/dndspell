import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';

class App extends React.Component {
  state = {
    selectedSpellIndex: 0,
    favorites: JSON.parse(window.localStorage.getItem('spells') || "[]")
  }

  addToFavorites = (spell, selectedSpellIndex) => {
    const newFavorites = this.state.favorites.concat(spell);
    newFavorites.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
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

  onSpellChanged = (spell) => {
    this.setState({
      selectedSpellIndex: spell.value 
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <NavLink className="nav-brand" to="/">Home</NavLink>
              <NavLink className="nav-brand" to="/favorites/">Favorites</NavLink>
            </div>
          </nav>

          <Route path="/"
            exact
            component={
              () => <Home 
                      favorites={this.state.favorites}
                      addToFavorites={this.addToFavorites}
                      removeFromFavorites={this.removeFromFavorites} 
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
