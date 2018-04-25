import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/";
import LoginPage from "./pages/LoginPage/";
import Dashboard from "./pages/Dashboard/";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/dashboard" exact component={Dashboard} />
  </div>
);

export default App;
