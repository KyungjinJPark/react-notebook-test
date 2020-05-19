import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

import FormExample from './BootstrapForm.js';
import Notebook from './Notebook.js';

class App extends Component {
  state = {
    notes: [
      {
        'title': 'Day 1 - The Disaster',
        'contents': 'Today I started. And it was a disaster'
      },
      {
        'title': 'Afterthought',
        'contents': 'Yeah... But! At least I started. I feel pretty good about that one'
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

  render() {
    const { notes } = this.state;

    console.log(notes);

    return (
      <div className='woot'>
        <FormExample handleSubmit={this.handleSubmit} />
        <Notebook notes={notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;