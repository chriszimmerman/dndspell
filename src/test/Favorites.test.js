import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../Favorites';
import CollapsableSpellCard from '../CollapsableSpellCard';


it('renders a list of collapsable spell cards when there are favorites', () => {
    const removeFromFavorites = jest.fn();
    const favorites = [
      {name: "magic missile"},
      {name: "burning hands"}
    ];

    const wrapper = shallow(
      <Favorites
        removeFromFavorites={removeFromFavorites}
        favorites={favorites}
      />);

      expect(wrapper.find(CollapsableSpellCard).length).toEqual(2);

      expect(wrapper.find(CollapsableSpellCard).at(0).prop('spell')).toBe(favorites[0]);
      expect(wrapper.find(CollapsableSpellCard).at(1).prop('spell')).toBe(favorites[1]);
});

it('renders a paragraph saying there are no favorites when there are no favorites', () => {
    const favorites = [];

    const wrapper = shallow(
      <Favorites
        favorites={favorites}
      />);

      expect(wrapper.find(CollapsableSpellCard).length).toEqual(0);

      expect(wrapper.find('p').length).toEqual(1);
      expect(wrapper.find('p').text()).toEqual("You have no favorites");
});