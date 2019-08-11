import React from 'react';
import CollapsableSpellCard from '../CollapsableSpellCard';
import SpellCard from '../SpellCard';
import { shallow, render, mount } from 'enzyme';

it('renders a button that toggles collapsing of a favorite spell card', () => {
    const spell = {
      name: "magic missile"
    };

    const wrapper = shallow(<CollapsableSpellCard spell={spell}/>);

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').hasClass("btn")).toBe(true);
    expect(wrapper.find('button').hasClass("btn-link")).toBe(true);
    expect(wrapper.find('button').prop("data-toggle")).toBe("collapse");
    expect(wrapper.find('button').prop("data-target")).toBe("#magic missilecollapse");
    expect(wrapper.find('button').prop("aria-expanded")).toBe("false");
    expect(wrapper.find('button').prop("aria-controls")).toBe("magic missilecollapse");
    expect(wrapper.find('button').text()).toBe(spell.name);
});

it('renders a button to unfavorite the spell', () => {
    const spell = {
      name: "magic missile"
    };
    const unfavoriteButton = <div data-test-id="unfavoriteButton"></div>;

    const wrapper = shallow(<CollapsableSpellCard spell={spell} button={unfavoriteButton}/>);

    expect(wrapper.find('[data-test-id="unfavoriteButton"]')).toHaveLength(1);
});

it('renders a collapsable div containing the spell card', () => {
    const spell = {
      name: "magic missile"
    };

    const wrapper = shallow(<CollapsableSpellCard spell={spell} />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find(SpellCard)).toHaveLength(1);
    expect(wrapper.find(".collapse").hasClass("collapse")).toBe(true);
    expect(wrapper.find(".collapse").prop('id')).toBe('magic missilecollapse');
    expect(wrapper.find(".collapse").prop('aria-labelledby')).toBe(`${spell.name}`);
});