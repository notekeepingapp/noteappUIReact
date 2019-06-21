import React from 'react';
import "./Login.css";
import {Button, Modal} from "react-bootstrap";


export const LoginView = (props) => {
    return (
        <div className={"container-fluid h-100 text-dark"}>
            <nav className="navbar">
                <span className="mb-0 h1 navbar-text">Note Keeping app</span>
            </nav>
            <Modal show={true} className={"modal"}>
                <Modal.Header className={"modalheader"}><h1 style={{margin:'auto'}}>Login</h1></Modal.Header>
                <Modal.Body>
                    <label> User name</label>
                        <input type="text" className="form-control"  name={"username"} placeholder="Enter your User name"
                           value={props.username} onChange={props.handleUserInput}/>
                    <label>Password</label>
                    <input type="password" className="form-control" name={"password"} value={props.password}
                           placeholder="Enter yout Password" onChange={props.handleUserInput}/></Modal.Body>
                <Modal.Footer>
                    <Button className={"btnstyle"} onClick={props.handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};