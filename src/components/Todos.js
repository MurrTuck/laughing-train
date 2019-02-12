import React, { Component } from 'react';


class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo) => (
                <h4>{todo.title} {todo.timeEstimate}</h4>
            ))
        );
    }
}

export default Todos;
