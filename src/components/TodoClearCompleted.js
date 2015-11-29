import React, { Component } from 'react';

class TodoClearCompleted extends Component {
    render() {
        return <button className="clear-completed" onClick={this.props.clearCompletedTodos}>Clear completed</button>
    }
}

export default TodoClearCompleted;