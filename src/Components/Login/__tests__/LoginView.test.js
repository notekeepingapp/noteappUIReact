import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../LoginView';


describe('LoginComponent rendering', () => {
  let component;
  beforeEach(() => {
    component = shallow(<LoginView />);
  });

  it('should have LoginComponent', () => {
    expect(component).toMatchSnapshot();
  });
});
