import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../../forms/LoginForm";

class LoginPage extends React.Component {
  onSubmit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default LoginPage;
