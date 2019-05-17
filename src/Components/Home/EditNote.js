import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

export const EditNote=(props)=>{
    return(
        <Card style={{width: "18rem"}}>
            <Card.Body onChange={props.saveNote}>
                <Button type={"submit"} props={this.saveNote}>
                    Save
                </Button>
                <Card.Title>
                    <input
                        value={props.editingNote.noteTitle}
                        onChange={props.handleTitleChange}
                    />
                </Card.Title>
                <Card.Text>
                    <input
                        value={props.editingNote.noteContent}
                        onChange={props.handleContentChange}
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}