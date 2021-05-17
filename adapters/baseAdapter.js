import Env from '../config/environment'
const axios = require('axios');

class BaseAdapter{

    constructor(){
        this.api_host = Env.host || 'http://localhost:3001/';
    }

    apiPath(){
        return this.api_host
    }

    async post(payload){
        return await axios.post(this.apiPath(), payload);
    }

    async patch(id, payload){
        return  await axios.patch(`${this.apiPath()}/${id}`, payload);
    }

    async getAll(query=""){
        const queryValue = `${query.length> 0 ? '?'+query : query}`
        const request_url = this.apiPath() + queryValue
        return await axios.get(request_url);
    }

    async get(id){
        return await axios.get(`${this.apiPath()}/${id}`)
    }

    async delete(id){
        return  await axios.delete(`${this.apiPath()}/${id}`);
    }

    buildQuery(queries=[]){
        var requestQuery = ''
        queries.forEach(query => {
            requestQuery += `${query['name']}=${query['value']}`;
        })
        return requestQuery;
    }
}

export default BaseAdapter
