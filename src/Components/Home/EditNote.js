import Card from "react-bootstrap/Card";
import React from "react";

export const EditNote = (props) => {
    return (
        <Card style={{width: "18rem"}}>
            <Card.Body>
                <button onClick={props.saveNote}>Save</button>
                <Card.Title>
                    <input
                        value={props.noteTitle}
                        onChange={props.handleTitleChange}
                    />
                </Card.Title>
                <Card.Text>
                    <input
                        value={props.noteContent}
                        onChange={props.handleContentChange}
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}