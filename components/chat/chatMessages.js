import React, { Component } from "react";
import SidebarMessages from './sidebarMessages'
import HomeMessages from './homeMessages'
import MessagesObservable from '../../observables/messagesObservable'
import ContactsObservable from '../../observables/contactsObservable'

class ChatMessages extends Component {

    constructor(props){
        super(props);
        this.messagesObservable = new MessagesObservable();
        this.contactsObservable = new ContactsObservable();
    }

    componentDidMount(){
        this.contactsObservable.fetchContacts()
    }

    render(){
        return (
            <div id="frame">
                <SidebarMessages
                    messagesObservable = {this.messagesObservable}
                    contactsObservable = {this.contactsObservable}
                    selectContact={this.contactsObservable.selectContact.bind(this.contactsObservable)}
                    filterContacts={this.contactsObservable.filterContacts.bind(this.contactsObservable)}
                />
                <HomeMessages
                    messagesObservable = {this.messagesObservable}
                    contactsObservable = {this.contactsObservable}
                    addMessage={this.messagesObservable.addNewMessage.bind(this.messagesObservable)}
                />
            </div>
        )
    }
}

export default ChatMessages