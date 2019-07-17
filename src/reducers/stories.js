const initialState = [];

const stories = (state = [], action) => {
    switch (action.type) {

    case 'ADD_STORY':
        console.log('creare story')
        console.log(state)
        return [  {
            id:action.id,
            title:action.title,
            taskIds:[]
        }, ...state, ]
    case 'ADD_TASK':
        let modifiedStory=state.find((story)=>story.id===action.storyId)
        console.log('adaugare task la obiect')
        console.log(state)
        if(modifiedStory.taskIds===undefined)
        modifiedStory.taskIds=[action.id]
        else modifiedStory.taskIds.push(action.id)
        console.log('modifiedStory: ' , modifiedStory);
        const newState=state.filter((story)=>story.id!==action.storyId)
        return [
            modifiedStory,
            ...newState,
        ]
    default:
        return state
    }
}


export default  stories
//imbricare sau normalizare