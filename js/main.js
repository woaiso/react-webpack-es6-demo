/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/header.jsx';
import App from './component/todo/App';
import todoApp from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form from './component/form';


let store = createStore(todoApp);

class Main extends React.Component{
  render(){
  	console.log('yes');
    return (<div><Header />
    	<Provider store={store}>
    		<App />
    	</Provider>
    	<Form />
    	</div>);
  }
}
ReactDOM.render(<Main/>, document.getElementById('j_main_container'));
