export const addTodo = (todo) => {
    return {
        type: 'todoList/addTodo',
        payload: todo
    }
}