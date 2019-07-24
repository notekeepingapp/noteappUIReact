import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../LoginView';


describe('Login View rendering', () => {
  it('should match login view snapshot', () => {
    const component = shallow(<LoginView />);
    expect(component).toMatchSnapshot();
  });
});
