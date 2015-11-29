import React, { Component } from 'react';

class Todo extends Component {
    /*static propTypes = {
        text: React.PropTypes.String.isRequired,
        completed: React.PropTypes.boolean.isRequired,
        editing: React.PropTypes.boolean.isRequired
    };*/

    constructor(props) {
        super(props);

        this.getTodoClass = this.getTodoClass.bind(this);
        this.onTodoToggleClick = this.onTodoToggleClick.bind(this);
        this.toggleTodoCompletionState = this.toggleTodoCompletionState.bind(this);
        this.toggleTodoEditingState = this.toggleTodoEditingState.bind(this);
    }

    getTodoClass() {
        var todoClass = "";
        if (this.props.completed) {
            todoClass += " completed";
        } else if (this.props.editing) {
            todoClass += " editing";
        }

        return todoClass;
    }

    toggleTodoCompletionState() {
        this.props.toggleTodoState(this.props.id, 'completed');
    }

    toggleTodoEditingState() {
        this.props.toggleTodoState(this.props.id, 'editing');
    }

    onTodoToggleClick(event) {
        return false;
    }

    render() {
        return <li className={this.getTodoClass()}>
            <div className="view">
                <input className="toggle"
                       type="checkbox"
                       defaultChecked={this.props.completed}
                       onClick={this.toggleTodoCompletionState}
                       onChange={this.onTodoToggleClick}
                       onDoubleClick={this.toggleTodoEditingState}
                />
                <label>{ this.props.text }</label>
                <button className="destroy">&nbsp;</button>
            </div>
            <input className="edit"
                   value={this.props.text}
           />
        </li>
    }
}

export default Todo;