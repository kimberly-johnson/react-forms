import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {todos: []}
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(todo){
    let newTodo = {...todo, id: uuid()};
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  remove(id){
    this.setState(state => ({
      todos: state.todos.filter(t => t.id !== id)
    }));
  }

  render() {
    let todos = this.state.todos.map(todo => (
      <Todo key={todo.id} id={todo.id} activity={todo.activity} remove={this.remove}/>
    ));

    return (
      <div>
      <NewTodoForm add={this.add}/>
      {todos}
      </div>
    )
  }
}

export default TodoList;