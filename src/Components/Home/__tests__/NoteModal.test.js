import React from 'react';
import { shallow } from 'enzyme';
import NoteModel from '../NoteModal';


describe('Note Model rendering', () => {
  it('should match NoteModel', () => {
    const note = {
      noteTitle: 'Anju',
      noteContent: 'admin1',
    };
    const component = shallow(<NoteModel note={note} />);
    expect(component).toMatchSnapshot();
  });
});
