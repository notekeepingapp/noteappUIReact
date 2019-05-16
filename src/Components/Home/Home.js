import React from 'react';
import Note from "./Note";
import Card from "react-bootstrap/Card";
import ContentEditable from 'react-contenteditable'

const axios = require('axios');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isOnEdit: false,
            onEditNote: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:1234/list-notes/" + this.props.username).then(res => {
            this.setState({
                notes: res.data
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    handleCardClick = (notes) => {
        this.setState({
            isOnEdit: !this.state.isOnEdit,
            onEditNote: notes
        })
        console.log(notes);
    };

    handleTitleChange=(e)=>{
        console.log(e.target.value)
        //axios call to update title
    };

    handleContentChange=(e)=>{
        console.log(e.target.value)
        //axios call to update content
    };

    render() {
        if(this.state.isOnEdit){
            return(
                <div>
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title><ContentEditable html={this.state.onEditNote.noteTitle} className={"content-editable"} onChange={this.handleTitleChange}/></Card.Title>
                            <Card.Text><ContentEditable html={this.state.onEditNote.noteContent} className={"content-editable"} onChange={this.handleContentChange}/></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
        return (
                this.state.notes.map((notes) => {
                    return (
                        <Note notes={notes} handleCardClick={this.handleCardClick}/>
                    )
                })
        )
    }
}