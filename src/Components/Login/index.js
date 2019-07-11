import React, {Component} from "react";
import {isValidCredentials} from "./APIservice";
import "./style.css"
import {LoginView} from "./LoginView";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValidUser: false
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await isValidCredentials(this.state.username, this.state.password);
        if (isValid.status===200 && isValid.data) {
            this.props.history.push({pathname: "/home", props: {username: this.state.username}});
        } else if(isValid.status===200) {
            alert("username and password are incorrect");
        }else {
            alert("Failed to authenticate, server error");
        }
    };

    render() {
        return (
            <LoginView username={this.state.username} password={this.state.password}
                       handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default Index;
