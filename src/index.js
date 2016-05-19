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
import ReduxDemo1 from './redux-demo1/ReduxDemo';
import ReduxDemo2 from './redux-demo2/ReduxDemo';
const store = configureStore();

class Main extends React.Component {
    render() {
        return (<div>
                  <ReduxDemo1 />
                  <ReduxDemo2 />
                  <Provider store={ store }>
                    <div>
                      <App />
                      <JMStore />
                      <ReduxDevTool />
                    </div>
                  </Provider>
                </div>);
    }
}
ReactDOM.render(<Main/>, document.getElementById('j_main_container'));
