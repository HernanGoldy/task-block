import React, { Component } from "react";
import Todo from "./todo";


class TodoList extends Component {
    render() {
        const { todos, toggleTodo, deleteTodo } = this.props;
        return todos.map((todo, index) => {
            return(
                <Todo
                todo={ todo }
                index={ index }
                toggleTodo={ toggleTodo }
                deleteTodo={ deleteTodo }
                key={ todo.title }/>
            )
        });
    }
}

export default TodoList;