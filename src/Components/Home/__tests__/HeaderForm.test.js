import React from 'react';
import { shallow } from 'enzyme';
import HeaderForm from '../HeaderForm';

describe('HeaderForm rendering', () => {
  it('should match HeaderForm snapshot', () => {
    const component = shallow(<HeaderForm />);
    expect(component).toMatchSnapshot();
  });
});
