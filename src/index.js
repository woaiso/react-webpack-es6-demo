/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/header.jsx';
import App from './component/todo/App';
import JMStore from './component/jmstore';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form from './component/form';

import configureStore from './store/configureStore';
import ReduxDevTool from './containers/ReduxDevTool';

import 'antd-style';  // import style

const store = configureStore();

class Main extends React.Component {
    render() {
        return (<div>
                  <Provider store={ store }>
                    <div>
                      <JMStore />
                      <ReduxDevTool />
                    </div>
                  </Provider>
                </div>);
    }
}
ReactDOM.render(<Main/>, document.getElementById('j_main_container'));
