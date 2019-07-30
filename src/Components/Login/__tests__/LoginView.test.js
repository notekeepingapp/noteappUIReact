import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../LoginView';


describe('Login View Tests', () => {
  let component;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('should match login view snapshot', () => {
    component = shallow(<LoginView />);
    expect(component).toMatchSnapshot();
  });

  it('should the handleChange function when text input is changed for username', () => {
    component = shallow(<LoginView handleUserInput={mockFn} />);
    component.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'Anjali' } });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should the handleChange function when text input is changed for password', () => {
    component = shallow(<LoginView handleUserInput={mockFn} />);
    component.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Admin123' } });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call mock function when submit button is clicked', () => {
    component = shallow(<LoginView handleSubmit={mockFn} />);
    component.find('Button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
