import React from 'react';

export const LoginView = (props) => {
    return (
        <div className={"container-fluid h-100 text-dark"}>
            <div className="row justify-content-center align-items-center mt-5">
                <h1>Note Keeping app</h1>
            </div>
            <hr/>
            <div className={"row justify-content-center align-items-center h-100 w-100 bg-dar m-auto"}>
                <form className={"col col-sm-6 col-md-6 col-lg-4 col-xl-3"}>
                    <div className={"form-group"}>
                        <label htmlFor="exampleInputEmail1"> User name</label>
                        <input type="text" className="form-control" name={"username"} placeholder="User name"
                               value={props.username} onChange={props.handleUserInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name={"password"} value={props.password}
                               placeholder="Password" onChange={props.handleUserInput}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={props.validateUser}>Submit</button>
                </form>
            </div>
        </div>
    );
};