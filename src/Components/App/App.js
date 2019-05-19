import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import history from './history'
import Login from "../Login/Login";
import Home from "../Home/Home";

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={Home}/>
            </Router>
        </div>
    );
}

export default App;
