import React from 'react';
import { Redirect } from 'react-router-dom';
import Note from './Note';
import {
  deleteNote, getNotes, saveNote, updateNote,
} from './APIservice';
import './style.css';
import NoteModal from './NoteModal';
import HeaderForm from './HeaderForm';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      isOnEditNote: false,
      editingNote: null,
      show: false,
      error: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    if (this.props.location.props !== undefined) {
      this.fetchNotes();
    } else this.props.history.push({ pathname: '/' });
  }

    fetchNotes=async () => {
      const notes = await getNotes(this.props.location.props.username);
      if (notes.status === 200) {
        this.setState({
          notes: notes.data,
        });
      } else {
        this.setState({
          error: true,
          errorMessage: 'Error in getting notes',
        });
      }
    };

    handleCardClick = (note) => {
      this.setState({
        isOnEditNote: true,
        editingNote: note,
        show: true,
      });
    };

    handleNoteDelete = (note) => {
      deleteNote(note.user, note.id);
    };

    handleAddNote = () => {
      const addingNote = { noteTitle: '', noteContent: '', createdAt: new Date() };
      this.setState({
        editingNote: addingNote,
        show: true,
      });
    };

    handleTitleChange = (e) => {
      const newTitle = e.target.value;
      this.setState((prevState) => {
        const noteOnEdit = prevState.editingNote;
        noteOnEdit.noteTitle = newTitle;
        return { editingNote: noteOnEdit };
      });
    };

    handleSaveNote = () => {
      if (this.state.isOnEditNote) {
        updateNote(this.props.location.props.username, this.state.editingNote);
      } else saveNote(this.props.location.props.username, this.state.editingNote);
      this.setState({
        show: false,
      });
    };

    handleContentChange = (e) => {
      const newContent = e.target.value;
      this.setState((prevState) => {
        const noteOnEdit = prevState.editingNote;
        noteOnEdit.noteContent = newContent;
        return { editingNote: noteOnEdit };
      });
    };

    handleClose = () => {
      this.setState({
        show: false,
      });
    };

    render() {
      let username = null;
      if (this.props.location.props !== undefined) {
        ({ username } = this.props.location.props);
      } else this.props.history.push({ pathname: '/' });
      if (username) {
        return (
          <div>
            <HeaderForm />
            <span className="errorMessage">{this.state.error && <p className="error">{this.state.errorMessage}</p>}</span>
            <div className="notes">
              {this.state.notes.map(note => (
                <Note
                  note={note}
                  handleCardClick={this.handleCardClick}
                  handleNoteDelete={this.handleNoteDelete}
                />
              ))}
              <button type="button" onClick={this.handleAddNote} size="lg" className="mt-0 addNoteButton">+</button>
              <NoteModal
                note={this.state.editingNote}
                show={this.state.show}
                handleClose={this.handleClose}
                handleSaveNote={this.handleSaveNote}
                handleTitleChange={this.handleTitleChange}
                handleContentChange={this.handleContentChange}
              />
            </div>
          </div>
        );
      }

      return <Redirect to="/" />;
    }
}
