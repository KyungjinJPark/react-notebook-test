import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container"

import "./custom.css";
import FormExample from "./BootstrapForm";
import Notebook from "./Notebook";

//firebase
import fire from "./config"

class App extends Component {
  constructor () {
    super();

    this.state = {
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
  }

  componentDidMount() {
    fire.database().ref("woot/notes").on("value", this.firebaseGotData, this.firebaseGotErr);
  }

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

  firebaseTestPush = () => {
    fire.database().ref("woot/notes").set([{title: "Test Push", contents: "this was a test push"}]);
  }
  firebaseTestPull = () => {
    fire.database().ref("woot").once("value").then((snapshot) => {
      console.log(snapshot.val());
    });
  }
  firebaseTestUpdate = () => {
    fire.database().ref("woot/notes").update([{title: "AAAAAAA", contents: "aaaaaaaaaaaaaaaaaaaa"}]);
  }
  firebaseGotData = (data) => {
    // const notesData = data.val();
    // const arrayRef = Object.keys(notesData);
    // const notesArr = notesData[arrayRef[0]];
    // for (let i = 0; i < notesArr.length; i++) {
    //   console.log(notesArr[i]);
    // }
  }
  firebaseGotErr = (err) => {
    console.log("ERRROR");
    console.log(err);
  }

  render() {
    const { notes } = this.state;

    return (
      <Container className="woot">

        <button onClick={this.firebaseTestPush}>push test</button>
        <button onClick={this.firebaseTestPull}>pull test</button>
        <button onClick={this.firebaseTestUpdate}>update test</button>
        
        <FormExample handleSubmit={this.handleSubmit} />
        <hr />
        <Notebook notes={notes} removeNote={this.removeNote} />
      </Container>
    );
  }
}

export default App;