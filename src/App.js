import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextArea">
            <ControlLabel>MD Preview</ControlLabel>
            <FormControl componentClass="textarea">sample text</FormControl>
          </FormGroup>
        </div>

      </div>
    );
  }
}

export default App;
