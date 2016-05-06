import React, { Component } from 'react';
import Store, { dispatch, subscribe, getStore } from './Store';
import { connect } from 'react-redux';


const Message = ({msg}) => (
<div>
  <span>{ msg.content }</span>
  <span>{ msg.device }</span>
  <span>{ msg.date }</span>
</div>
);


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    render() {
        return (<div>
                  { this.state.messages.map((item, index) => (
                    <Message key={ index } msg={ item } />
                    )) }
                </div>);
    }
}

export default class ReduxDemo extends Component {
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
        this.props.dispatch({
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
              <h1>ReduxDemo</h1>
              <MessageList messages={ this.state.messages } />
              <input type="text" value={ this.state.message } onChange={ this.handleChange.bind(this) } />
              <button onClick={ this.sendMsg.bind(this) }>send</button>
            </div>
            );
    }
}
ReduxDemo = connect()(ReduxDemo);
export default ReduxDemo;