import React, { Component } from "react";


class Contact extends Component {

    constructor(props){
        super(props);
        this.getCurrentContact = this._getCurrentContact.bind(this);
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

    handleButtonClick(id){
        this.props.contactsObservable.selectContact(id)
        this.props.messagesObservable.getMessages({id})
    }

    profileActive(){
        const contact = this.state.currentContact || {}
        if(contact.id == this.props.id){
            return 'active'
        }else{
            return ''
        }
    }

    render(){
        const profileActive = this.profileActive()
        return (
            <li class={`contact ${this.profileActive()}`} onClick={e => this.handleButtonClick(this.props.id)}>
                <div class="wrap">
                <img src={this.props.url_image} alt="" />
                <div class="meta">
                    <p class="contact name">{this.props.name}</p>
                    <p class="contact preview">{this.props.preview}</p>
                </div>
                </div>
            </li>
        )
    }
}

export default Contact
