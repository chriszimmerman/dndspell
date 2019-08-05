import React from 'react';
import SpellCard from './SpellCard';

class Favorites extends React.Component {
  render() {
      const favorites = this.props.favorites;

      return (
        <div className="container">
            <h1>Favorites</h1>
            {
                favorites.length > 0
                ? 
                favorites.map((spell) => {
                    const button = <button className="btn btn-warning" onClick={() => this.props.removeFromFavorites(spell)}>Unfavorite</button>;
                    return (
                        <div>
                            <SpellCard spell={spell} button={button}/>
                        </div>
                    );
                }) 
                :
                (<p>You have no favorites</p>)
            }
        </div>
      );
  }
}

export default Favorites;
