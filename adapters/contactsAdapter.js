import BaseAdapter from './baseAdapter';

class ContactsAdapter extends BaseAdapter{
    constructor(){
        super()
    }

    apiPath(){
        return this.api_host + "contacts"
    }

    fetchContacts(context, queries=[]){
        const requestQuery = this.buildQuery(queries)
        const req = this.getAll(requestQuery)
        req.then(response => {
            if(response.status == 200){
                context.contacts = response.data
                if(context.publish){
                    context.publish()
                }
            }
        }).catch(error => {
            console.error(error);
        })
    }
}

export default ContactsAdapter
