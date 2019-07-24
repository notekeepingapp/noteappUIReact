import React from 'react';
import Card from 'react-bootstrap/Card';

const Note = props => (
  <div
    className="note"
    style={{
      width: 250,
      height: 250,
      overflow: 'auto',
    }}
  >
    <Card>
      <button
        type="button"
        variant="light"
        onClick={() => {
          props.handleNoteDelete(props.note);
        }}
        style={{ width: 'fit-content', height: 'fit-content', alignSelf: 'flex-end' }}
      >
X
      </button>
      <div>
        <Card.Body onClick={() => {
          props.handleCardClick(props.note);
        }}
        >
          <Card.Title>{props.note.noteTitle}</Card.Title>
          <Card.Text>{props.note.noteContent}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  </div>
);

export default Note;
