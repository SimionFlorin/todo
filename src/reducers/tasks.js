const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state,
                {
                    id: action.id,
                    title: action.task.title,
                    description: action.task.description,
                    taskType: action.task.taskType,
                    status: action.task.status,
                    // story:action.task.status,
                }
            ];
        case 'UPDATE_STATUS':
            const newState = state.filter((task) => task.id !== action.taskId)
            return [
                ...newState,
                Object.assign({}, state.find((task) => task.id === action.taskId), {status: action.status})
            ];
        default:
            return state
    }
};

export default tasks
