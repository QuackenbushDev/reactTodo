import React, { Component } from 'react';

class TodoCounter extends Component {
    render() {
        var count = 0;

        this.props.todos.forEach(function(todo) {
            if (!todo.completed) count++;
        });

        return <span className="todo-count">
            <strong>{ count }</strong> item left
        </span>
    }
}

export default TodoCounter;