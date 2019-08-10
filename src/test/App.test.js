import React from 'react';
import App from '../App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';

it('renders a React Router', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router).length).toBe(1);
});
