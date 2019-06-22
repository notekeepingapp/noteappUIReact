import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../utils/history";
import Index from "../Components/Login/index";
import Index from "../Components/Home/index";

function App() {
    return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Index} />
      </Router>
    </div>
  );
}

export default App;
