import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';
import TodoFilter from './components/TodoFilter';
import TodoClearCompleted from './components/TodoClearCompleted';

export class App extends Component {
    constructor(props) {
        super(props);

        this.handleTextUpdate    = this.handleTextUpdate.bind(this);
        this.toggleTodoState     = this.toggleTodoState.bind(this);
        this.changeTodoFilter    = this.changeTodoFilter.bind(this);
        this.clearCompletedTodos = this.clearCompletedTodos.bind(this);
    }

    componentDidMount() {
        if (window.localStorage.getItem('todos')) {
            this.setState({
                todos: JSON.parse(window.localStorage.getItem('todos')),
                filter: 'All'
            });

            return;
        }

        this.init();
    }

    init() {
        var todos = [
            {
                id: 0,
                text: "Taste JavaScript",
                completed: true,
                editing: false
            },
            {
                id: 1,
                text: "Buy a unicorn",
                completed: false,
                editing: false
                },
            {
                id: 2,
                text: "Kick Roberto's arse!",
                completed: false,
                editing: true
            }
        ];

        this.setState({todos: todos});
        this.save();
    }

    save() {
        window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    addTodo(text) {
        var todos = this.state.todos;

        todos.push({
            id: Math.random * 10000,
            text: text,
            completed: false,
            editing: false
        });

        this.setState({todos: todos});
        this.save();
    }

    handleTextUpdate(id, value) {
    }

    toggleTodoState(id, type) {
        var todos = [];

        this.state.todos.forEach(function(todo) {
            if (todo.id == id) {
                switch (type) {
                    case "completed":
                        todo.completed = !todo.completed;
                        break;

                    case "editing":
                        todo.editing = !todo.editing;
                        break;
                }
            }

            todos.push(todo);
        });

        this.setState({
            todos: todos
        });

        this.save();
    }

    changeTodoFilter(filter) {
        this.setState({filter: filter});
    }

    clearCompletedTodos() {
        var todos = [];
        this.state.todos.forEach(function(todo) {
            if (todo !== null && !todo.completed) {
                todos.push(todo);
            }
        });

        this.setState({todos: todos});
        this.save();
    }

    render() {
        return <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" autofocus />
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <TodoList todos={this.state.todos}
                              handleTextUpdate={this.handleTextUpdate}
                              toggleTodoState={this.toggleTodoState}
                              filter={this.state.filter}
                    />
                </section>

                <footer className="footer">
                    <TodoCounter todos={this.state.todos} />
                    <TodoFilter changeTodoFilter={this.changeTodoFilter} activeFilter={this.state.filter} />
                    <TodoClearCompleted clearCompletedTodos={this.clearCompletedTodos} />
                </footer>
            </section>

            <footer className="info">
                <p>Double-click to edit a todo</p>
                <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                <p>Created by <a href="mailto:christopher@quackenbush.me">Christopher Quackenbush</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    }
}