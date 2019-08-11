import React from 'react';
import SpellCard from '../SpellCard';
import { shallow, mount, render } from 'enzyme';

it('renders an h2 with the spell name', () => {
    const expected = "Magic Missile";
    const spell = {
      name: expected 
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="name"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="name"]').text()).toBe(expected);
});

it('renders an h3 with the spell level', () => {
    const level = "4th level";
    const expected = `${level} spell`;
    const spell = {
      level
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="level"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="level"]').text()).toBe(expected);
});

it('renders an paragraph with the spell components', () => {
    const components = "A silken cloth";
    const expected = `Components: ${components}`;
    const spell = {
      components
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="components"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="components"]').text()).toBe(expected);
});

it('renders an paragraph with the spell material', () => {
    const material = "V, S";
    const expected = `Material: ${material}`;
    const spell = {
      material
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="material"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="material"]').text()).toBe(expected);
});

it('renders an paragraph with the spell ritual', () => {
    const ritual = "Sing a song";
    const expected = `Ritual: ${ritual}`;
    const spell = {
      ritual
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="ritual"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="ritual"]').text()).toBe(expected);
});

it('renders an paragraph with the spell concentration', () => {
    const concentration = "yes";
    const expected = `Concentration: ${concentration}`;
    const spell = {
      concentration
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="concentration"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="concentration"]').text()).toBe(expected);
});

it('renders an paragraph with the spell range', () => {
    const range = "15 meters";
    const expected = `Range: ${range}`;
    const spell = {
      range
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="range"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="range"]').text()).toBe(expected);
});

it('renders an paragraph with the spell casting time', () => {
    const castingTime = "1 round";
    const expected = `Casting Time: ${castingTime}`;
    const spell = {
      casting_time: castingTime
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="castingTime"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="castingTime"]').text()).toBe(expected);
});

it('renders an paragraph with the spell duration', () => {
    const duration = "24 hours";
    const expected = `Duration: ${duration}`;
    const spell = {
      duration
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="duration"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="duration"]').text()).toBe(expected);
});

it('renders an paragraph with the spell school', () => {
    const school = "Abjuration";
    const expected = `School: ${school}`;
    const spell = {
      school
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="school"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="school"]').text()).toBe(expected);
});

it('renders an paragraph with the spell classes', () => {
    const classes = "Wizard, Paladin";
    const expected = `Classes: ${classes}`;
    const spell = {
      class: classes
    };

    const wrapper = shallow(<SpellCard spell={spell} />);

    expect(wrapper.find('[data-test-id="class"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="class"]').text()).toBe(expected);
});