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

  componentDidMount() {
    this.getAllMessages();
  }

  getAllMessages() {
    $.ajax({
      url: '/api/messages/',
      method: 'GET',
      success: messages => this.setState({ messages }),
      error: errorFromServer => console.error(errorFromServer),
    });
  }

  createNewMessage() {
    const { newMessage } = this.state;
    const payload = {
      text: newMessage,
    };
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
export default App;
