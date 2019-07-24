import React from 'react';
import { shallow } from 'enzyme';
import Note from '../Note';

describe('Note View rendering', () => {
  test('should match Note view snapshot', () => {
    const note = {
      noteTitle: 'Anju',
      noteContent: 'admin1',
    };
    const component = shallow(<Note note={note} />);
    expect(component).toMatchSnapshot();
  });
});
