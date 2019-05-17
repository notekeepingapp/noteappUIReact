import React from 'react';

export const LoginView =(props)=>{
    return(
        <form onSubmit={props.validateUser}>
            <input
                value={props.username}
                name="username"
                type="text"
                onChange={event => props.handleUserInput(event)}
                style={{margin: "20px auto, display: block"}}
            />
            <input
                value={props.password}
                name="password"
                type="password"
                onChange={event => props.handleUserInput(event)}
                style={{margin: "20px auto, display: block"}}
            />
            <button
                type="submit"
                name="submit"
                style={{margin: "20px auto, display: block"}}
            >
                Submit
            </button>
        </form>
    )
};