/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/header.jsx';
class Main extends React.Component{
  render(){
    return <div><Header /><div className="foo" ><h1>This Is React WebPack ES6 JSX Demo</h1></div></div>;
  }
}
ReactDOM.render(<Main/>, document.getElementById('j_main_container'));
