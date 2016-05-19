/*jshint esversion:6*/

import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import saveShelf from './jmstore';

const todoApp =combineReducers({
	todos,
	visibilityFilter,
	saveShelf
});
export default todoApp;