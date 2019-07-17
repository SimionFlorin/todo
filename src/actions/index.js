import uuid from 'uuid'

export const addStory = title => ({
    type: 'ADD_STORY',
    id: uuid.v1(),
    title
});

export const addTaskToStory = (storyId, task) => ({
    type: 'ADD_TASK',
    id: uuid.v1(),
    task,
    storyId
});

export const updateTaskStatus = (taskId, status) => ({
    type: 'UPDATE_STATUS',
    taskId,
    status
});

export const TaskStatus = {
    NEW: 'NEW',
    ACTIVE: 'ACTIVE',
    RESOVLED: 'RESOVLED',
    CLOSED: 'CLOSED'
};

export const TaskStatusEnum = [
    'NEW',
    'ACTIVE',
    'RESOLVED',
    'CLOSED'
];
