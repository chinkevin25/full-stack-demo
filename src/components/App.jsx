import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: '',
      text: '',
    };
  }

  // Notice that because our server and client live in the same location, our URL
  // can be a relative URL. If this was not the case and our server and client lived
  // it two different locations, we will need to update our URL.

  makeTrivialRequest() {
    $.ajax({
      url: `/api/cohort/${this.state.cohort}`,
      method: 'GET',
      success: dataFromServer => this.setState({ text: dataFromServer }),
      error: errorFromServer => console.error(errorFromServer),
    });
  }

  handleTextChange(e) {
    this.setState({ cohort: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.makeTrivialRequest();
  }


  // Notice that when we pass our functions into our event listeners we are using the fat
  // arrow syntax. This makes us not need to use fn.bind(this) in our constructor to make sure
  // our this binding is correct. The fat arrow this has slightly different this  binding rules

  render() {
    return (
      <div>
        <h1>{this.state.text || 'Input a cohort number'}</h1>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input type="text" placeholder="cohort number" onChange={e => this.handleTextChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// Dont forget to export the App so we can use it in index.jsx
export default App;
