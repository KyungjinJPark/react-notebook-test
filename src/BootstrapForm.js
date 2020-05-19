import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const FormExample = props => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    //set corresponding state to value
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'contents':
        setContents(value);
        break;
      default:
        console.log("change not handled");
        break;
    }
  };

  const sumbitForm = () => {
    if (title && contents) {
      const submission = {
        'title': title,
        'contents': contents
      };
      props.handleSubmit(submission);
      setTitle('');
      setContents('');
    }
  };
  
  return (
    <Container className="createNote">
      <h1>Create a Note to add to Your Notebook</h1>
      <label htmlFor="title">Title</label>
      <InputGroup className="mb-3">
        <FormControl
          autoComplete="off"
          type="text"
          id="title"
          name="title"
          placeholder="Note Title"
          value={title}
          onChange={handleChange}
        />
      </InputGroup>

      <label htmlFor="contents">Contents</label>
      <InputGroup className="mb-3">
        <FormControl
          autoComplete="off"
          type="text"
          as="textarea"
          rows="5"
          name="contents"
          placeholder="Note Contents"
          value={contents}
          onChange={handleChange}
        />
      </InputGroup>

      <Button variant="primary" onClick={sumbitForm}>
        Save Note
      </Button>
    </Container>
  );
};

export default FormExample