/*jshint esversion:6*/
import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';


const App = () => (<div>
                     <h2>Redux Demo 2 Use React-Redux</h2>
                     <AddTodo />
                     <VisibleTodoList />
                     <Footer />
                   </div>
);

export default App;
