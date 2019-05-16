import React, {Component} from 'react';
import '../App/App.css';
import Home from "../Home/Home";

const axios = require('axios');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            isValidUser: false
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        if(!this.state.isValidUser){
            return (
                <form onSubmit={this.getUser}>
                    <input value={this.state.username} name="username" type="text" onChange={(event) => this.handleUserInput(event)} style={{margin: "20px auto, display: block"}}/>
                    <input value={this.state.password} name="password" type="password" onChange={(event) => this.handleUserInput(event)} style={{margin: "20px auto, display: block"}}/>
                    <button type="submit" name="submit"  style={{margin: "20px auto, display: block"}}>Submit</button>
                </form>
            )
        }
        return(
            <Home username={this.state.username}/>
        )
    }

    getUser=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:1234/login", {username: this.state.username, password: this.state.password})
            .then(res => {
                console.log(res.data);
                if(res.data){
                    this.setState({
                        isValidUser: true
                    })
                }
            }).catch((err)=>{
                console.log(err);
        })
    };
}

export default Login;