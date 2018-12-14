import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class App extends Component {


  state = {
    markdown: '',
  }

  updateMarkdown = md => {
    this.setState({
      markdown: md
    });
  }

  render() {
    let {markdown} = this.state
    console.log(markdown);

    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextArea">
            <ControlLabel>MD Preview</ControlLabel>
            <FormControl componentClass="textarea" value={markdown}
            onChange={event => {this.updateMarkdown(event.target.value)}}>
            # h1 Heading 8-)
            ## h2 Heading
            ### h3 Heading
            #### h4 Heading
            ##### h5 Heading
            ###### h6 Heading
            
            
            ## Horizontal Rules
            
            ___
            
            ---
            
            ***
            
            
            ## Typographic replacements
            
            Enable typographer option to see result.
            
            (c) (C) (r) (R) (tm) (TM) (p) (P) +-
            
            test.. test... test..... test?..... test!....
            
            !!!!!! ???? ,,  -- ---
            
            "Smartypants, double quotes" and 'single quotes'
            
            
            ## Emphasis
            
            **This is bold text**
            
            __This is bold text__
            
            *This is italic text*
            
            _This is italic text_
            
            ~~Strikethrough~~</FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>mkdown output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} className="markdown"></div>
        </div>
      </div>
    );
  }
}

export default App;
