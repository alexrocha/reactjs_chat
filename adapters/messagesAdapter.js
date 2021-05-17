import BaseAdapter from './baseAdapter';

class MessagesAdapter extends BaseAdapter{
    constructor(){
        super()
    }

    apiPath(){
        return this.api_host + "messages"
    }

    fetchData(context, queries=[]){
        const requestQuery = this.buildQuery(queries)
        const req = this.getAll(requestQuery)
        req.then((response) => {
            if(response.status == 200){
                context.messages = response.data
                if(context.publish){
                    context.publish()
                }
            }
        }).catch(error => {
            console.error(error);
        })
    }
}

export default MessagesAdapter
