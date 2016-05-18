import React, { Component } from 'react';
import { createStore } from 'redux';

function chat(messages = [], action) {
    switch (action.type) {
    case 'ADD_MESSAGE':
        const message = {
            content: action.message,
            device: 'iphone6s plus',
            type: 'text',
            time: new Date()
        };
        return [...messages, message];
    default:
        return messages;
    }
}
let store = createStore(chat);

/*********Redux end*********/


const Message = ({msg}) => (
<div>
  <span style={{fontSize:14,color:'#333'}}>{ msg.content }</span>
  <span>{ msg.device }</span>
  <span>{ msg.time.toString() }</span>
</div>
);


class MessageList extends Component {
    constructor(props) {
        super(props);
        var $$this=this;
        this.state = {
            messages: []
        };
        store.subscribe(function() {
            $$this.setState({
                messages: store.getState()
              });
        });
    }
    render() {
        return (<div>
                  { this.state.messages.map((item, index) => (
                    <Message key={ index } msg={ item } />
                    )) }
                </div>);
    }
}

export default class ReduxDemo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: []
        };
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    /**
     * 发送消息
     * @return {[type]} [description]
     */
    sendMsg() {
        store.dispatch({
            type: "ADD_MESSAGE",
            message: this.state.message
        });
        this.state.messages.push(this.state.message);
        this.state.message = ''; //
        this.setState(this.state);
    }
    render() {
        return (
            <div>
              <h2>Redux Demo 1 Use Pure Redux </h2>
              {/**展示对话列表**/}
              <MessageList messages={ this.state.messages } />
              {/** 输入框**/}
              <input type="text" value={ this.state.message } onChange={ this.handleChange.bind(this) } />
              {/**发送按钮**/}
              <button onClick={ this.sendMsg.bind(this) }>send</button>
            </div>
            );
    }
}