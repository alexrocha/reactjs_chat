class Model {

    adapter(){}
 
    save(callback=null, currentContact){
        const modelAdapter = this.adapter()
        const payload = this.payload()
        modelAdapter.post(payload).then(resp => {
            if(callback){
                callback(currentContact)
            }
        })
    }
}

export default Model