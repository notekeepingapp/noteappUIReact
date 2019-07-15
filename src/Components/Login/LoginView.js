import React from 'react';
import './style.css';
import { Button, Modal } from 'react-bootstrap';


const LoginView = props => (
  <div className="container-fluid h-100 text-dark">
    <nav className="navbar">
      <span className="mb-0 h1 navbar-text">Note Keeping app</span>
    </nav>
    <Modal show className="modal">
      <Modal.Header className="modalheader"><h1 style={{ margin: 'auto' }}>Login</h1></Modal.Header>
      <Modal.Body>
        <label htmlFor="UserName" className="label">
          <span>User name</span>
          <input
            type="text"
            className="form-control"
            name="username"
            id="Username"
            placeholder="Enter your User name"
            value={props.username}
            onChange={props.handleUserInput}
          />
        </label>
        <label htmlFor="password" className="label">
          <span>Password</span>
          <input
            type="password"
            className="form-control"
            name="password"
            value={props.password}
            placeholder="Enter yout Password"
            onChange={props.handleUserInput}
          />
        </label>
        <span className="errorMessage">{props.invalidCredentials && <p className="error">{props.errorMessage}</p>}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btnstyle" onClick={props.handleSubmit}>
                    Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default LoginView;
