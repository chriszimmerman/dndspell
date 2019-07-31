import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';

class App extends React.Component {
  state = {
    selectedSpellIndex: 0,
    favorites: JSON.parse(window.localStorage.getItem('spells') || "[]")
  }

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
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites/">Favorites</Link>
          </nav>

          <Route path="/" exact component={() => <Home favorites={this.state.favorites} addToFavorites={this.addToFavorites} />} />
          <Route path="/favorites/" component={() => <Favorites favorites={this.state.favorites }/> } />
        </div>
      </Router>
    );
  }
}

export default App;
