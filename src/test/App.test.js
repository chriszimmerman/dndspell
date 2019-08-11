import React from 'react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders a React Router', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router).length).toBe(1);
});
