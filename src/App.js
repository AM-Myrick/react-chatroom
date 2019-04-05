import React, { Component } from 'react';
import MessageList from "./components/MessageList";
import './App.css';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_DATA,
    }
  }
  
  render() {
    return (
      <div className="App">
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
