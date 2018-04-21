import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>HomePage</h1>
    {isAuthenticated ? (
      <button onClick={logout}>Logout</button>
    ) : (
      <Link to="/login" href="/login">
        Login
      </Link>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default HomePage;
