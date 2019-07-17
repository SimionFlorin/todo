import React from 'react'
import {TaskStatusEnum} from './../actions/index';
import AddTaskDialog from './AddTaskDialog';
import Task from '../containers/TaskContainer';

const Story = (props) => {
    const [open, setOpen] = React.useState(false)
    const tasks = props.tasks
    const closeDialog = () => setOpen(false)
    // useEffect(() => {
    //     return () => {
    //         fi
    //     };
    // }, [input])
    return (
        <div style={{width: '100%'}}>

            <div style={{display: 'flex'}}>
                <span style={{width: '20%'}}>
                <h1>{props.title}</h1>
                <button data-testid='dialog-open-button' onClick={() => setOpen(true)}>Add a task</button>
                </span>
                {
                    TaskStatusEnum.map((taskStatus) => {
                        const filteredTasks = tasks.filter((task) => task.status === taskStatus)
                        return (
                            <span style={{width: '20%'}}>
                        <ul>
                        {
                            filteredTasks.map((filteredTask) =>
                                (
                                    <Task title={filteredTask.title} description={filteredTask.description}
                                          taskType={filteredTask.taskType} status={filteredTask.status}
                                          id={filteredTask.id}
                                          updateTaskStatusDispatch={props.updateTaskStatusDispatch}
                                    />
                                )
                            )
                        }
                        </ul>
                    </span>
                        )
                    })
                }

            </div>
            {/* <button onClick={()=>{console.log(props.StoryId);}}>TestareCLG</button> */}
            <AddTaskDialog addTask={props.addTask} storyId={props.StoryId}
                           closeDialog={closeDialog} open={open}/>
            {/* <TextField  */}
            {/* // value={testare} */}
            {/* ></TextField> */}
            {/* //  onChange={han} */}
        </div>
    )
};

export default Story
