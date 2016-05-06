/*jshint esversion:6*/
import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import ReduxDemo from './ReduxDemo';

const App = () => ( < div>
                      < AddTodo />
                      < VisibleTodoList />
                      < Footer />
                      <ReduxDemo />
                     < /div>
);

export default App;
