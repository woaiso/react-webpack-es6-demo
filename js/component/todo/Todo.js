
import React,{ PropTypes } from 'react';

const Todo=({onClick,completed,text}) =>(
  <li
  onClick={onClick}
  style={{
    textDecoration:completed?'line-through':'none'
  }}
  >{text}</li>
  );
//设置传入参数的类型校验
Todo.propTypes={
  onClick:PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired
};


export default Todo;