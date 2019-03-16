import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  // This function will handle fetching all the messages from the server.
  getAllMessages() {
    $.ajax({
      url: '/api/messages/',
      method: 'GET',
      success: messages => this.setState({ messages }),
      error: errorFromServer => console.error(errorFromServer),
    });
  }

  // This function will handle the creation of a new message.
  createNewMessage() {
    // object deconstruction. This is the same as writing:
    // const newMessage = this.state.newMessage
    const { newMessage } = this.state;
    const payload = {
      text: newMessage,
    };
    // Notice that the data is a stringified JSON object. The contentType will need to be specified
    // so the server knows how to handle the information we're about to send.
    $.ajax({
      url: '/api/messages/',
      method: 'POST',
      data: JSON.stringify(payload),
      contentType: 'application/json',
      success: () => this.getAllMessages(),
      error: err => console.error(err, 'error'),
    });
  }

  handleTextChange(e) {
    this.setState({ newMessage: e.target.value });
  }

  handleFormSubmit(e) {
    // Many HTML elements have default behaviors. When a form is submitted it
    // will try to navigate to a specified page. When a page is not specified,
    // it will default to redirecting to the current page which will refresh the page
    e.preventDefault();
    this.createNewMessage();
  }

  render() {
    const messages = this.state.messages.map(msg => <div key={msg.createdAt}>{msg.text}</div>);
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="What's your message"
            onChange={e => this.handleTextChange(e)}
            // It's the React way to make inputs controlled by state. React needs to know what
            // is in the input box.
            value={this.state.newMessage}
          />
          <input type="submit" />
        </form>
        Messages:
        {messages}
      </div>
    );
  }
}

// Dont forget to export the App so we can use it in index.jsx
export default App;
