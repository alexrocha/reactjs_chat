import React, { Component } from "react";
import Message from '../../../models/message'


class MessageForm extends Component {

    constructor(props){
        super(props);
        this.getCurrentContact = this._getCurrentContact.bind(this)
        this.state = {
            message: '',
            currentContact: null
        }
    }

    componentDidMount(){
        this.props.contactsObservable.subscribe(this.getCurrentContact);
    }

    componentWillUnmount(){
        this.props.messagesObservable.unsubscribe(this.getCurrentContact);
    }

    _getCurrentContact(state={}){
        const {currentContact} = state
        this.setState({...this.state, currentContact})
    }

    handleKeyPress(e) {
        const str = e.target.value
        this.setState({message: e.target.value});
        if ((e.key === "Enter") && this.validateInput()) {
            this.clearInput();
            this.props.addMessage(this.buildNewMessage(str), this.state.currentContact)
        }
    }

    validateInput(){
        if(this.state.message.length < 1){
            alert('por favor digite uma mensagem antes de enviar')
            return false
        }
        return true
    }

    clearInput(){
        this.setState({message: ''})
    }

    handleButtonClick(e){
        e.preventDefault();
        const str = this.state.message
        if (this.validateInput()) {
            this.clearInput();
            this.props.addMessage(this.buildNewMessage(str), this.state.currentContact)
        }
    }

    buildNewMessage(str){
        const message = new Message({
            receiver_id: this.state.currentContact.id,
            message: str,
        })
        return message;
    }
    
    render(){
        if(!this.state.currentContact){
            return null
        }else{
            return (
                <div class="message-input">
                    <div class="wrap">
                        <input 
                            type="text" 
                            placeholder="Escreva sua mensagem..." 
                            onKeyPress={e => this.handleKeyPress(e)}
                            onChange={e => this.handleKeyPress(e)}
                            value={this.state.message}/>
                        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                        <button class="submit" onClick={e => this.handleButtonClick(e)}>
                            Enviar
                        </button>
                    </div>
                </div>
            )
        }
    }
}


export default MessageForm
