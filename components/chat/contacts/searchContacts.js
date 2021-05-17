import React, { Component } from "react";

class SearchContacts extends Component {

    constructor(props){
        super(props);
    }

    handleKeyPress(e) {
        const str = e.target.value
        this.props.contactsObservable.filterContacts(str)
    }

    render(){
        return (    
            <div id="search">
               <label htmlor=""><i class="fa fa-search" aria-hidden="true"></i></label>
               <input type="text" 
                      placeholder="Buscar contatos..."
                      onKeyPress={e => this.handleKeyPress(e)}
                      onChange={e => this.handleKeyPress(e)}/>
            </div>
        )
    }
}

export default SearchContacts
