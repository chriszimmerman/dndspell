import React from 'react';
import Select from 'react-select';
import { shallow } from 'enzyme';
import Home from '../Home';
import SpellCard from '../SpellCard';
import SpellData from '../SpellData';

jest.mock('../SpellData');

it('renders a Select component', () => {
    const selectedSpellIndex = 0;
    const onSpellChanged = jest.fn();
    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();
    const spellData = [{name: "magic missile"}];
    const options = [{value: 0, label: "magic missile"}];
    const favorites = [];

    SpellData.getSpellData.mockReturnValue(spellData);

    const wrapper = shallow(
      <Home
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        selectedSpellIndex={selectedSpellIndex}
        favorites={favorites}
        onSpellChanged={onSpellChanged}
      />);

      const select = wrapper.find(Select);

      expect(select.prop('value')).toEqual(selectedSpellIndex);
      expect(select.prop('onChange')).toBe(onSpellChanged);
      expect(select.prop('options')).toEqual(options);
      expect(select.prop('isSearchable')).toBe(true);
      expect(select.prop('placeholder')).toEqual("Type a spell here");
});

it('renders a SpellCard component for the selected spell', () => {
    const selectedSpellIndex = 0;
    const onSpellChanged = jest.fn();
    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();
    const spellData = [{name: "magic missile"}];
    const favorites = [];

    SpellData.getSpellData.mockReturnValue(spellData);

    const wrapper = shallow(
      <Home
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        selectedSpellIndex={selectedSpellIndex}
        favorites={favorites}
        onSpellChanged={onSpellChanged}
      />);

      const select = wrapper.find(SpellCard);

      expect(select.prop('spell')).toEqual(spellData[selectedSpellIndex]);
});