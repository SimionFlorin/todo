
import { addTaskToStory, updateTaskStatus } from '../actions';

import { connect } from 'react-redux';
import StoryList from '../components/StoryList';

const mapStateToProps = state => ({
    stories:state.stories,
    tasks:state.tasks    
})

const mapDispatchToProps = dispatch => ({
    addTask: (id,task)=>dispatch(addTaskToStory(id,task)),
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryList)
