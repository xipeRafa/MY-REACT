import { useState } from 'react'

const useTodos = (initialTodos) => {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (todo) => {
        todo.id = Date.now();

        setTodos([
            ...todos,
            todo
        ])
    }

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return [
        todos,
        addTodo,
        deleteTodo,
    ]
}

export default useTodos
