import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Message, Label, Input } from "semantic-ui-react";
import Validator from "validator";

const { keys } = Object;

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const { data } = this.state;
    const errors = this.validate(data);

    this.setState({
      errors
    });

    if (keys(errors).length === 0) {
      this.setState({
        loading: true
      });

      this.props
        .submit(data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email))
      errors.email = "Please enter a valid email address";
    if (!data.password) errors.password = "Password cannot be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const errorsList = keys(errors).map(key => errors[key]);

    return (
      <Form
        loading={loading}
        onSubmit={this.onSubmit}
        error={errors.password || errors.email || errors.server}
      >
        <Message
          error
          header="Oops, looks like there was mistake."
          list={errorsList}
        />
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">
            Email:
            <Input
              id="email"
              type="text"
              onChange={this.onChange}
              placeholder="enter your email"
              name="email"
              value={data.email}
            />
          </label>
          {errors.email && (
            <Label basic color="red" pointing>
              {errors.email}
            </Label>
          )}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">
            Password:
            <Input
              id="password"
              type="password"
              onChange={this.onChange}
              placeholder="enter your password"
              name="password"
              value={data.password}
            />
          </label>
          {errors.password && (
            <Label basic color="red" pointing>
              {errors.password}
            </Label>
          )}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
