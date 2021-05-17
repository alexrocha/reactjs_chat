import React, { Component } from "react";

class MessageProfile extends Component {

    constructor(props){
        super(props)
        this.getCurrentContact = this._getCurrentContact.bind(this)
        this.state = {
            currentContact: null
        }
    }

    componentDidMount(){
        this.props.contactsObservable.subscribe(this.getCurrentContact);
    }

    componentWillUnmount(){
        this.props.contactsObservable.unsubscribe(this.getCurrentContact);
    }

    _getCurrentContact(state={}){
        const {currentContact} = state
        this.setState({...this.state, currentContact})
    }

    loadProfile(){
        const contact = this.state.currentContact
        if(contact){
            return (
                <div class="contact-profile">
                    <img src={contact.url_image} alt="" />
                    <p>{contact.name}</p>
                </div>
            )
        }else{
            return null
        }
    }

    render(){
        return (
            <div>
                {this.loadProfile()}
            </div>
        )
    }
}


export default MessageProfile
