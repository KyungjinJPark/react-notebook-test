import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container"

import "./custom.css";
import FormExample from "./BootstrapForm";
import Notebook from "./Notebook";

class App extends Component {
  state = {
    notes: [
      {
        title: "Day 1 - The Disaster",
        contents: "Today I started. And it was a disaster"
      },
      {
        title: "Afterthought",
        contents: "Yeah... But! At least I started. I feel pretty good about that one"
      }
    ]
  };

  removeNote = index => {
    const { notes } = this.state;
    this.setState({
      notes: notes.filter(
        (row, rowIndex) => {
          return rowIndex !== index;
        }
      )
    });
  };

  handleSubmit = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  firebaseTest = () => {
    
  }

  render() {
    const { notes } = this.state;

    return (
      <Container className="woot">

        <button onClick={this.firebaseTest}>Testme</button>
        
        <FormExample handleSubmit={this.handleSubmit} />
        <hr />
        <Notebook notes={notes} removeNote={this.removeNote} />
      </Container>
    );
  }
}

export default App;