import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class App extends Component {

  state = {
    markdown:'# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading \n## Horizontal Rules\n___\n---\n*** \n \n ## Emphasis \n**This is bold text**\n__This is bold text__\n*This is italic text*\n_This is italic text_ ~~Strikethrough~~' ,
  }

  updateMarkdown = md => {
    this.setState({
      markdown: md
    });
  }

  render() {
    let {markdown} = this.state
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextArea">
            <ControlLabel>MD Preview</ControlLabel>
            <FormControl componentClass="textarea" value={markdown}
            onChange={event => {this.updateMarkdown(event.target.value)}}></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>markdown output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} className="markdown"></div>
        </div>
      </div>
    );
  }
}

export default App;
