import React, { Component } from "react";
import Profile from './contacts/profile';
import ContactsList from './contacts/contactsList';
import SearchContacts from './contacts/searchContacts';

class SidebarMessages extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const props = this.props
        return (
            <div id="sidepanel">
               <Profile />
               <SearchContacts {...props} />
               <ContactsList {...props}/>
            </div>
        )
    }
}

export default SidebarMessages
