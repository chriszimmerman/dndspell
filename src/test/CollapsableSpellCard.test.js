import React from 'react';
import CollapsableSpellCard from '../CollapsableSpellCard';
import { shallow } from 'enzyme';

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