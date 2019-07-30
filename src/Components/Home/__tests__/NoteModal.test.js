import React from 'react';
import { shallow } from 'enzyme';
import NoteModel from '../NoteModal';


describe('Note Model rendering', () => {
  let noteModel;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('should match NoteModel snapshot', () => {
    const mockNote = {
      noteTitle: 'Anju',
      noteContent: 'admin1',
    };
    noteModel = shallow(<NoteModel note={mockNote} />);
    expect(noteModel).toMatchSnapshot();
  });

  it('should call the mock function when note title is changed', () => {
    noteModel = shallow(<NoteModel handleTitleChange={mockFn} />);
    noteModel.find('input.inputNoteTitle').simulate('change', { target: { value: 'Hakuna Matata' } });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call the mock function when note content is changed', () => {
    noteModel = shallow(<NoteModel handleContentChange={mockFn} />);
    noteModel.find('input.inputNoteContent').simulate('change', { target: { value: 'Hakuna Matata' } });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call the mock function when save button is pressed', () => {
    noteModel = shallow(<NoteModel handleSaveNote={mockFn} />);
    noteModel.find('Button.saveNoteButton').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
