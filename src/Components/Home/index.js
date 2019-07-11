import React from "react";
import Note from "./Note";
import {deleteNote, getNotes, saveNote, updateNote} from "./APIservice";
import "./style.css"
import NoteModal from "./NoteModal";
import {Redirect} from "react-router-dom";
import HeaderForm from "./HeaderForm"

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isOnEditNote: false,
            editingNote: null,
            isOnAddNote: false,
            show: false,
            deleted: false
        };
    }

    fetchNotes=async ()=>{
        let notes = await getNotes(this.props.location.props.username);
        if(notes.status===200){
            this.setState({
                notes: notes.data
            });
        }else {
            alert("Error in getting notes");
        }
    };

    componentDidMount() {
        if (this.props.location.props !== undefined) {
            this.fetchNotes();
        }
        else
            this.props.history.push({pathname: "/"});
    }

    handleCardClick = note => {
        this.setState({
            isOnEditNote: true,
            editingNote: note,
            show: true
        });
    };

    handleNoteDelete = note => {
        deleteNote(note.user, note.id);
        this.setState({
            deleted: true
        })
    };

    handleAddNote = () => {
        let addingNote = {noteTitle: "", noteContent: "", createdAt: new Date()};
        this.setState({
            isOnAddNote: true,
            editingNote: addingNote,
            show: true
        });
    };

    handleTitleChange = e => {
        let noteOnEdit = this.state.editingNote;
        noteOnEdit.noteTitle = e.target.value;
        this.setState({
            editingNote: noteOnEdit
        });
    };

    handleSaveNote = () => {
        if (this.state.isOnEditNote)
            updateNote(this.props.location.props.username, this.state.editingNote);
        else
            saveNote(this.props.location.props.username, this.state.editingNote);
        this.setState({
            show: false
        })
    };

    handleContentChange = e => {
        let noteOnEdit = this.state.editingNote;
        noteOnEdit.noteContent = e.target.value;
        this.setState({
            editingNote: noteOnEdit
        });
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    render() {
        let username = null;
        if (this.props.location.props !== undefined) {
            username = this.props.location.props.username;
        }
        else
            this.props.history.push({pathname: "/"});
        if (username) {
            return (
                <div>
                    <HeaderForm/>
                    <div className={"notes"}>
                        {this.state.notes.map(note => {
                            return (
                                <Note note={note} handleCardClick={this.handleCardClick}
                                      handleNoteDelete={this.handleNoteDelete}/>
                            );
                        })}
                        <button onClick={this.handleAddNote} size={"lg"} className="mt-0 addNoteButton">+</button>
                        <NoteModal note={this.state.editingNote} show={this.state.show} handleClose={this.handleClose}
                                   handleSaveNote={this.handleSaveNote} handleTitleChange={this.handleTitleChange}
                                   handleContentChange={this.handleContentChange}/>
                    </div>
                </div>
            );
        }
        else {
            return <Redirect to="/"/>
        }
    }
}
