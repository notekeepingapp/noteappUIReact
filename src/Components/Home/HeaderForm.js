import React from "react";

const HeaderForm=() =>{
    return(
        <div>
            <div className={"container-fluid h-100 text-dark"}>
                <nav className="navbar">
                    <span className="mb-0 h1 navbar-text">Note Keeping app</span>
                </nav>
            </div>
            <div className="container">
                <div className="jumbotron row justify-content-center mt-0 p-0">
                    <h1>Your Notes</h1>
                </div>
            </div>
        </div>
    )
};
export default HeaderForm;