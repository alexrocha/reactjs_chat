import React, { Component } from "react";


class Messages extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <li class={this.props.way} >
                <img src={this.props.url} alt="" />
                <p class='contact'>{this.props.message}</p>
            </li>
        )
    }
}


export default Messages
