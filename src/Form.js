import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    title: '',
    text: ''
  }

  state = this.initialState

  handleChange = event => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  sumbitForm = () => {
    const {title, text} = this.state
    if (title && text) {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }
  }

  render() {
    const {title, text} = this.state

    return (
      <div>
        <input
          id="title" name="title" label="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          id="text" name="text" label="Text"
          value={text}
          onChange={this.handleChange}
        />
        <button
        variant="contained"
        color="primary"
        onClick={this.sumbitForm}
        >
          Save Note
        </button>
      </div>
    )
  }
}

export default Form