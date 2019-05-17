import React, {Component} from "react";
import "../App/App.css";
import Home from "../Home/Home";
import {isValidCredentials} from "./LoginApi";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValidUser: false
        };
    }

    handleUserInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    validateUser = async (e) => {
        e.preventDefault();
        let isValid = await isValidCredentials(this.state.username, this.state.password);
        if (isValid) {
            this.setState({
                isValidUser: true
            })
        } else {
            alert("username and password are incorrect");
        }
    };

    render() {
        if (!this.state.isValidUser) {
            return (
                <form onSubmit={this.validateUser}>
                    <input value={this.state.username} name="username" type="text"
                           onChange={event => this.handleUserInput(event)}
                           style={{margin: "20px auto, display: block"}}/>
                    <input value={this.state.password} name="password" type="password"
                           onChange={event => this.handleUserInput(event)}
                           style={{margin: "20px auto, display: block"}}/>
                    <button type="submit" name="submit" style={{margin: "20px auto, display: block"}}>Submit</button>
                </form>
            );
        }
        return <Home username={this.state.username}/>;
    }
}

export default Login;
