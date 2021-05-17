import React, { Component } from "react";
import Contact from './contact';

class ContactsList extends Component {

  constructor(props){
    super(props);
    this.updateContacts = this._updateContacts.bind(this);
    this.state = {
      filteredContacts: [],
      contacts: []
    }
  }

  componentDidMount(){
    this.props.contactsObservable.fetchContacts()
    this.props.contactsObservable.subscribe(this.updateContacts);
  }

  componentWillUnmount(){
    this.props.contactsObservable.unsubscribe(this.updateContacts);
}

  _updateContacts(state={}){
    const {contacts, filteredContacts} = state
    this.setState({...this.state, contacts, filteredContacts})
  }

  loadContacts(){
    if(this.state.filteredContacts.length){
      return this.state.filteredContacts
    }else{
      return this.state.contacts
    }
  }

  render(){
    console.log('99999999999999999999999999999999999')
    const props = this.props
    const contacts = this.loadContacts()
    return (
      <div id="contacts">
        <ul>
          {contacts.map(contact => {
            return <Contact {...props} {...contact} key={contact.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default ContactsList
