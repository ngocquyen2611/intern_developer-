const initState = {
    filter: {
        search:'',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn React', completed: false, priority: 'High'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'Medium'},
        {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low'}
    ]
}

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload,
                ]
    }

    default:
        return state;
    }
}

export default rootReducer;