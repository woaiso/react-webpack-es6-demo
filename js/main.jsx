/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
  render(){
    return <div className="foo" ><h1>哈哈哈哈</h1></div>;
  }
}
ReactDOM.render(<Main/>, document.getElementById('main_container'));
