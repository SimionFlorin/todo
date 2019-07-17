const initialState = [];

const stories = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_STORY':
            return [{
                id: action.id,
                title: action.title,
                taskIds: []
            }, ...state,];
        case 'ADD_TASK':
            let modifiedStory = state.find((story) => story.id === action.storyId);
            if (modifiedStory.taskIds === undefined)
                modifiedStory.taskIds = [action.id];
            else modifiedStory.taskIds.push(action.id);
            console.log('modifiedStory: ', modifiedStory);
            const newState = state.filter((story) => story.id !== action.storyId);
            return [
                modifiedStory,
                ...newState,
            ];
        default:
            return state
    }
};

export default stories
