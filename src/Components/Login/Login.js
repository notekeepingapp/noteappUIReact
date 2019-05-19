import React, {Component} from "react";
import {isValidCredentials} from "./LoginApi";
import "./Login.css"
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
            this.props.history.push({pathname: "/home", props: {username: this.state.username}});
        } else {
            alert("username and password are incorrect");
        }
    };

    render() {
        return (
            <LoginView username={this.state.username} password={this.state.password}
                       handleUserInput={this.handleUserInput} validateUser={this.validateUser}/>
        )
    }
}

export default Login;
