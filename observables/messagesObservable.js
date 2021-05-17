import MessagesAdapter from '../adapters/messagesAdapter'

class messagesObservable {

    constructor(){
        this.messages = [];
        this._commands = [];
        this.messagesAdapter = new MessagesAdapter()
    }

    subscribe(func){
        this._commands.push(func);
    }

    unsubscribe(func){
        this._commands = this._commands.filter(f => f !== func);
    }

    publish(){
        this._commands.forEach(func =>{
            func(this.messages);
        } );
    }

    addNewMessage(message, currentContact){
        message.save(this.getMessages.bind(this), currentContact)
    }

    getMessages(currentContact){
        if(currentContact){
            const filter = [{name: 'receiver_id', value: currentContact.id }]
            this.messagesAdapter.fetchData(this, filter);
        }
    }


}

export default messagesObservable