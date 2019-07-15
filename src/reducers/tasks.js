


 const tasks = (state = [],  action) => {
    switch (action.type) {

    case 'ADD_TASK':
        
        return [ ...state,
            {
                id:action.id,
                title:action.task.title,
                description:action.task.description,
                type:action.task.taskType,
                status:action.task.status,
                // story:action.task.status,
            }
         ]
    case 'UPDATE_STATUS':
        let updatedTask=state.find((task)=>task.id===action.taskId)
        updatedTask.status=action.status
        let newState=state.filter((task)=>task.id!==action.taskId)
        console.log(updatedTask)
       return [
           ...newState,updatedTask
       ]
    default:
        return state
    }
}
export default tasks