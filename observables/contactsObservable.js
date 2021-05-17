import ContactsAdapter from '../adapters/contactsAdapter'

class contactsObservable {

    constructor(){
        this._commands = [];
        this.contacts = [];
        this.currentContact = null;
        this.filteredContacts = [],
        this.contactsAdapter = new ContactsAdapter()
    }

    subscribe(func){
        this._commands.push(func);
    }

    unsubscribe(func){
        this._commands = this._commands.filter(f => f !== func);
    }

    publish(){
        const {contacts, currentContact, filteredContacts} = this
        this._commands.forEach(func =>{
            func({contacts, currentContact, filteredContacts});
        } );
    }

    fetchContacts(){
        this.contactsAdapter.fetchContacts(this)
    }
    
    filterContacts(term=''){
        this.filteredContacts = this.contacts.filter((e) => {
            return e.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        })
        this.publish()
    }

    selectContact(contactID){
        const currentContact = this.contacts.filter((e) => {return e.id == contactID})[0]
        this.currentContact = currentContact
        this.publish()
    }


}

export default contactsObservable