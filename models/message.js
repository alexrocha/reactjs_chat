import Model from './model'
import MessageAdapter from '../adapters/messagesAdapter'

class Message extends Model {

    constructor(attr={}){
        super()
        this.sender_id = 11
        this.message = attr.message
        this.receiver_id = attr.receiver_id
        this.way = 'replies'
        this.url = "http://emilcarlsson.se/assets/mikeross.png"
    }

    // __dict__
    payload(){
        const {sender_id, message, receiver_id, way, url} = this
        return {sender_id,message,receiver_id,way,url}
    }

    adapter(){
        return new MessageAdapter()
    }

}

export default Message