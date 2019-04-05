import React, { Component } from 'react';
import Chatkit from "@pusher/chatkit-client"
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
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

const instanceLocator = process.env.REACT_APP_INSTANCE_LOCATOR;
const testToken = process.env.REACT_APP_TEST_TOKEN;
const username = process.env.REACT_APP_USERNAME;
const roomId = process.env.REACT_APP_ROOMID;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_DATA,
    }
  }
  
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
   }) 
   chatManager.connect().then(currentUser => {
    currentUser.subscribeToRoom({
    roomId: roomId,
    hooks: {
      onNewMessage: message => {
        this.setState({
          messages: [...this.state.messages, message]
          })
        }
      }
    })
  })
  }

  render() {
    return (
      <div className="App">
        <p className="title">NES Chatroom</p>
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
