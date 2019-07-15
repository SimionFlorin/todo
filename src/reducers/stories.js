
const stories = (state = [], action) => {
    switch (action.type) {

    case 'ADD_STORY':
        console.log('creare story')
        console.log(state)
        return [ ...state, {
            id:action.id,
            title:action.title,
            taskIds:[]
        } ]
    case 'ADD_TASK':
        let modifiedStory=state.find((story)=>story.id===action.storyId)
        console.log('adaugare task la obiect')
        console.log(state)
        if(modifiedStory.taskIds===undefined)
        modifiedStory.taskIds=[action.id]
        else modifiedStory.taskIds.push(action.id)
        console.log('modifiedStory: ' , modifiedStory);
        let newState=state.filter((story)=>story.id!==action.storyId)
        return [
            ...newState,
            modifiedStory
        ]
    default:
        return state
    }
}


export default  stories
//imbricare sau normalizare