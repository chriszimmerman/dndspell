import React from 'react';
import SpellCard from './SpellCard';

class Favorites extends React.Component {
  render() {
      const favorites = this.props.favorites;

      return (
        <div>
            <h1>Favorites</h1>

            {
                favorites.length > 0
                ? 
                favorites.map((spell) => {
                    return (
                        <div>
                            <p><button onClick={() => this.props.removeFromFavorites(spell)}>Remove From Favorites</button></p>
                            <SpellCard spell={spell}/>
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
