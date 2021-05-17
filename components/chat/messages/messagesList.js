const axios = require('axios');
import React, { Component } from "react";
import Message from './message';

class MessagesList extends Component {

    constructor(props){
        super(props);
        this.fetchMessages = this._fetchMessages.bind(this)
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        this.props.messagesObservable.subscribe(this.fetchMessages);
    }

    componentWillUnmount(){
        this.props.messagesObservable.unsubscribe(this.fetchMessages);
    }

    _fetchMessages(messages){
        this.setState({...this.state, messages})
    }

    render(){
        return (
            <div class="messages">
                <ul>
                    {this.state.messages.map(message => {
                        return <Message {...message} key={message.id}/>
                    })}
                </ul>
            </div>
        )
    }
}


export default MessagesList
