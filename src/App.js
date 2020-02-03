import React, { Component } from "react";
import Loading from "./Loading";
import SignIn from "./SignIn";
import Notes from "./Notes";

export default class App extends Component {
  state = { loading: true, username: "" };
  componentDidMount() {
    const username = window.localStorage.getItem("username") || "";
    this.setState({ loading: false, username });
  }
  signIn = username => {
    this.setState({ username });
    window.localStorage.setItem("username", username);
  };
  signOut = () => {
    this.setState({ username: "" });
    window.localStorage.setItem("username", "");
  };
  render() {
    const { loading, username } = this.state;
    if (loading) return <Loading />;
    return username.length > 0 ? (
      <Notes signOut={this.signOut} username={username} />
    ) : (
      <SignIn signIn={this.signIn} />
    );
  }
}
