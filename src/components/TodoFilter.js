import React, { Component } from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);

        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(event) {
        event.preventDefault();
        this.props.changeTodoFilter(event.target.innerText);
    }

    render() {
        var allFilterClass       = (this.props.activeFilter == 'All') ? 'selected' : '';
        var activeFilterClass    = (this.props.activeFilter == 'Active') ? 'selected' : '';
        var completedFilterClass = (this.props.activeFilter == 'Completed') ? 'selected' : '';

        return <ul className="filters">
            <li><a className={allFilterClass} href="#/" onClick={this.changeFilter}>All</a></li>
            <li><a className={activeFilterClass} href="#/" onClick={this.changeFilter}>Active</a></li>
            <li><a className={completedFilterClass} href="#/" onClick={this.changeFilter}>Completed</a></li>
        </ul>
    }
}

export default TodoFilter;