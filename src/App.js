import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:title" children={<Details />}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
