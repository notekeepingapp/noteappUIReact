import React from 'react';
import Card from "react-bootstrap/Card";

const Note = (props) =>{
    return(
        <div onClick={() => {
            props.handleCardClick(props.notes)
        }}>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{props.notes.noteTitle}</Card.Title>
                    <Card.Text>{props.notes.noteContent}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Note;