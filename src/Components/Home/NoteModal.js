import {Button, Modal} from "react-bootstrap";
import React from "react";

const NoteModal = (props) => {
    let noteTitle = '', noteContent = '';
    if (props.note != null) {
        noteTitle = props.note.noteTitle;
        noteContent = props.note.noteContent;
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <input placeholder={"Note Title"}
                       className={"inputNoteTitle"} value={noteTitle}
                       onChange={props.handleTitleChange}/>
            </Modal.Header>
            <Modal.Body><input placeholder={"Write your note here"}
                               className={"inputNoteContent"}
                               value={noteContent} onChange={props.handleContentChange}/></Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleSaveNote} className={"saveNoteButton"}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default NoteModal;