import React from 'react'
import Story from './Story';
import {TaskStatusEnum} from '../actions';
import PropTypes from 'prop-types';
import {Divider} from '@material-ui/core';

const StoryList = ({stories, tasks, addTask}) => {

    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex'}}>
        <span style={{width: '20%'}}>
            <h2>Story</h2>
        </span>
                {console.log(stories)}
                {
                    TaskStatusEnum.map((taskStatus) => (
                        <span style={{width: '20%'}}>
                    <h2>{taskStatus}</h2>
                </span>
                    ))
                }
            </div>
            <Divider/>
            <div>
                {stories && stories.map((story) => {
                    console.log('merge')
                    const filteredTasks = tasks.filter((task) => story.taskIds.includes(task.id))
                    return (<div>
                        <Story key={story.id} StoryId={story.id}
                               tasks={filteredTasks} title={story.title}
                               addTask={addTask}
                            // {...filteredTasks}
                        />
                        <Divider/>
                    </div>)
                })}
            </div>
        </div>

    )
};

StoryList.propTypes = {
    stories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            tasks: PropTypes.array.isRequired
        }).isRequired
    ).isRequired
};


export default StoryList
