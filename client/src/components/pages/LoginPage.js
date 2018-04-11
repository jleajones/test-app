import React from "react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {
  onSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.onSubmit} />
      </div>
    );
  }
}

export default LoginPage;
