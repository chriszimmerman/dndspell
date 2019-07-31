import React from 'react';
import SpellCard from './SpellCard';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const favorites = this.props.favorites;

      return (
        <div>
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

export default Favorites;
