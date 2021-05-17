import React, { Component } from "react";
import MessageForm from './messages/messageForm';
import MessageProfile from './messages/messageProfile';
import MessagesList from './messages/messagesList';


class HomeMessages extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const props = this.props
        return (
            <div class="content">
                <MessageProfile {...props}/>
                <MessagesList {...props} />
                <MessageForm {...props}/>
            </div>
        )
    }
}


export default HomeMessages
