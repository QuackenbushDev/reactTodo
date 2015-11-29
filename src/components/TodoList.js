import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    /*static PropType = {
        todos: React.PropTypes.array.isRequired
    };*/

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.todos == null || this.props.todos.length == 0) {
            return <ul className="todo-list">

            </ul>
        }

        var toggleTodoState = this.props.toggleTodoState;
        var filter = this.props.filter;
        var todos = this.props.todos.map(function(todo, index) {
            if (filter == 'Active' && todo.completed || filter == 'Completed' && !todo.completed) {
                return;
            }
            return <Todo key={todo.id}
                         id={todo.id}
                         text={todo.text}
                         completed={todo.completed}
                         editing={todo.editing}
                         toggleTodoState={toggleTodoState}
            />
        });

        return <ul className="todo-list">
            { todos }
        </ul>
    }
}

export default TodoList;