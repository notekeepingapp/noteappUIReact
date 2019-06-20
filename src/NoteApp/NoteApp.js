import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "../utils/history";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
