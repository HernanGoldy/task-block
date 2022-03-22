import React, { Component } from "react";


class Todo extends Component {
    render() {
        const {todo, index, toggleTodo, deleteTodo} = this.props;
        return(
            <li key={ todo.title }>
                <span
                    className={`task ${todo.completed ? "completed" : ""}`}>
                        { todo.title }
                </span>
                <span
                    className="icon-task"
                    role="img"
                    aria-label="emoji"
                    onClick={ toggleTodo }
                    data-index={ index }>
                        🆗
                </span>
                <span
                    className="icon-task"
                    role="img"
                    aria-label="emoji"
                    onClick={ deleteTodo }
                    data-index={ index }>
                        ❌
                </span>
            </li>
        )
    }
}

export default Todo;