import React from 'react';
import { shallow } from 'enzyme';
import Note from '../Note';

describe('Note View rendering', () => {
  let note;
  let mockFn;
  let mockNote;
  beforeEach(() => {
    mockFn = jest.fn();
    mockNote = {
      noteTitle: 'Twinkle',
      noteContent: 'Twinkle twinkle little star',
    };
  });

  it('should match Note view snapshot', () => {
    note = shallow(<Note note={mockNote} />);
    expect(note).toMatchSnapshot();
  });

  it('should call mock function when the note delete button is pressed', () => {
    note = shallow(<Note note={mockNote} handleNoteDelete={mockFn} />);
    note.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
