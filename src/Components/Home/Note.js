import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Note = (props) => {
    return (
        <div className={"note"} style={{
            width: 250,
            height: 250, overflow: 'auto'
        }}>
            <Card>
                <Button variant={"light"} onClick={()=>{props.handleNoteDelete(props.note)}} style={{width:"fit-content", alignSelf:"flex-end"}}>Delete</Button>
                <div onClick={() => {
                    props.handleCardClick(props.note)
                }}>
                    <Card.Body>
                        <Card.Title>{props.note.noteTitle}</Card.Title>
                        <Card.Text>{props.note.noteContent}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
};

export default Note;