import React, { Component } from 'react';

export default class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={(e) => this.handleSubmit(e)}
                className="send-message-form">
                <input
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}