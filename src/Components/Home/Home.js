import React from "react";
import Note from "./Note";
import {deleteNote, saveNote, updateNote} from "./HomeApi";
import {EditNote} from "./EditNote";

const axios = require("axios");

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isOnEditNote: false,
            editingNote: null,
            isOnAddNote: false
        };
    }

    async componentDidMount() {
        console.log("inside home")
        await axios.get("http://localhost:1234/list-notes/" + this.props.username)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    this.setState({
                        notes: res.data
                    });
                }
                else {
                    //err in getting notes
                    alert("Error in getting notes");
                }
            })
            .catch(err => {
                return false;
            });
        // let notes = await getNotes(this.props.username);
    }

    handleCardClick = note => {
        this.setState({
            isOnEditNote: true,
            editingNote: note
        });
    };

    handleNoteDelete = note => {
        if (deleteNote(note.user, note.id))
            alert("note deleted");
        else
            alert("note delete failed");
    };

    handleAddNote = () => {
        let addingNote = {noteTitle: "", noteContent: "", createdAt: new Date()};
        this.setState({
            isOnAddNote: true,
            editingNote: addingNote
        });
    };
    handleTitleChange = e => {
        let noteOnEdit = this.state.editingNote;
        noteOnEdit.noteTitle = e.target.value;
        this.setState({
            editingNote: noteOnEdit
        });
    };

    saveNote = () => {
        console.log(this.state.editingNote);
        if (this.state.isOnAddNote) {
            if (saveNote(this.props.username, this.state.editingNote))
                alert("note saved");
            else
                alert("note save failed");
        } else if (this.state.isOnEditNote) {
            console.log(this.state.editingNote);
            if (updateNote(this.props.username, this.state.editingNote))
                alert("updated note");
            else
                alert("update note failed");
        }
    };

    handleContentChange = e => {
        let noteOnEdit = this.state.editingNote;
        noteOnEdit.noteContent = e.target.value;
        this.setState({
            editingNote: noteOnEdit
        });
    };

    render() {
        if (this.state.isOnAddNote || this.state.isOnEditNote) {
            return (
                <EditNote noteTitle={this.state.editingNote.noteTitle} noteContent={this.state.editingNote.noteContent}
                          saveNote={this.saveNote} handleTitleChange={this.handleTitleChange}
                          handleContentChange={this.handleContentChange}/>
            );
        }
        return (
            <div className={"notes"} style={{display: "flex", justifyContent: "start"}}>
                {this.state.notes.map(note => {
                    return (
                        <Note note={note} handleCardClick={this.handleCardClick}
                              handleNoteDelete={this.handleNoteDelete}/>
                    );
                })}
                <button onClick={this.handleAddNote} size={"sm"} style={{height: "fit-content"}}>+</button>
            </div>
        );
    }
}
