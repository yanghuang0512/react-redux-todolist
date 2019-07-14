import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import VisibilityFilters from "./components/VisibilityFilters"
import "./style.css";
export default function TodoApp() {
    return (
        <div className="todoListApp">
            <h1>Todo List App</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    )
}
