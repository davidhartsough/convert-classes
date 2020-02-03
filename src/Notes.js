import React, { Component } from "react";
import "./Notes.css";

export default class Notes extends Component {
  state = { loading: true, note: "", notes: [] };
  componentDidMount() {
    const { username } = this.props;
    const notes =
      JSON.parse(window.localStorage.getItem(`${username}_notes`)) || [];
    this.setState({ loading: false, notes });
  }
  handleChange = ({ target }) => {
    this.setState({ note: target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { note } = this.state;
    if (note.length > 0) {
      this.setState(
        state => ({
          note: "",
          notes: [...state.notes, note]
        }),
        () => {
          console.log(this.state.notes);
          window.localStorage.setItem(
            `${this.props.username}_notes`,
            JSON.stringify(this.state.notes)
          );
        }
      );
    }
  };
  render() {
    const { username, signOut } = this.props;
    const { note, notes } = this.state;
    return (
      <section>
        <header className="header">
          <div className="header-text">
            <h1>Notes</h1>
            <h2>Welcome, {username}!</h2>
          </div>
          <button onClick={signOut}>Sign out</button>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a note
            <input
              type="text"
              placeholder="Note"
              value={note}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" hidden />
        </form>
        <div className="notes">
          {notes.map((n, i) => (
            <div key={`${n}-${i}`} className="note">
              <p>{n}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
