import React, { Component } from "react";

export default class SignIn extends Component {
  state = { username: "" };
  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    if (username.length > 0) {
      this.props.signIn(username);
    }
  };
  render() {
    const { username } = this.state;
    return (
      <section>
        <header>
          <h1>Sign in</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              placeholder="username"
              pattern="[a-z]{3,20}"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </section>
    );
  }
}
