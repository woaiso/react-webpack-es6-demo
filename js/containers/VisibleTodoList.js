/*jshint esversion:6*/

import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../component/todo/TodoList';


const getVisibleTodos=(todos,filter)=>{
	switch(filter){
		case "SHOW_ALL":
			return todos;
		case "SHOW_ACTIVE":
			return todos.filter(t=>t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t=> !t.completed);
		default:
			return todos;
	}
};


const mapStateToProps=(state)=>{
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}

const mapDispatchToProps=(dispatch) =>{
	return {
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id));
		}
	}
}

const VisibleTodoList=connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;