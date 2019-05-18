import React, {Component} from "react";
import {isValidCredentials} from "./LoginApi";
import "./Login.css"
import Home from "../Home/Home";
import {LoginView} from "./LoginView";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValidUser: false
        };
    }

    handleUserInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    validateUser = async (e) => {
        e.preventDefault();
        let isValid = await isValidCredentials(this.state.username, this.state.password);
        console.log(isValid);
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
                <LoginView username={this.state.username} password={this.state.password}
                           handleUserInput={this.handleUserInput} validateUser={this.validateUser}/>
            )
        }
        return <Home username={this.state.username}/>;
    }
}

export default Login;
