import React, { Component } from 'react';
import { createStore ,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import chatApp from './reducers';
import {addMessage,fetchPost} from './actions';

let store = createStore(chatApp,applyMiddleware(thunkMiddleware));

/*********Redux end*********/


const Message = ({msg}) => (
    <div>
        <span style={{ fontSize: 14, color: '#333' }}>{ msg.content }</span>
        <span>{ msg.device }</span>
        <span>{ msg.time.toString() }</span>
    </div>
);


class MessageList extends Component {
    constructor(props) {
        super(props);
        var $$this = this;
        this.state = {
            messages: []
        };
        store.subscribe(function () {
            console.log(store.getState())
            $$this.setState({
                messages: store.getState().chat
            })
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

export default class ReduxDemo2 extends Component {
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
        const msg=this.state.message;
        store.dispatch(
            addMessage(msg)
        );
        this.state.message = ''; //
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                <h2>Redux Demo 2 Use combineReducers </h2>
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