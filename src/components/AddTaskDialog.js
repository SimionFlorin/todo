import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Select, MenuItem} from '@material-ui/core';

export default function AddTaskDialog(props) {

    const [open, setOpen] = React.useState(props.open);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [taskType, setTaskType] = React.useState('Bug');
    const [status, setStatus] = React.useState('NEW');

    function handleClose() {
        props.closeDialog();
        setOpen(false);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'title')
            setTitle(value);
        if (name === 'description')
            setDescription(value);
        if (name === 'taskType')
            setTaskType(value);
        if (name === 'status')
            setStatus(value)
    };

    useEffect(() => {
        return () => {
            setOpen(props.open)
        };
    }, [props.open]);

    return (
        <div>
            <Dialog open={open} onClose={props.closeDialog()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add a task</DialogTitle>
                <DialogContent
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <DialogContentText>
                        Add a task
                    </DialogContentText>
                    <TextField
                        name='title' value={title} onChange={(e) => handleChange(e)} label='title'
                    />
                    <TextField
                        name='description' value={description} onChange={(e) => handleChange(e)}
                        label='description'
                    />
                    <Select
                        name='taskType'
                        value={taskType}
                        onChange={(e) => handleChange(e)}
                        label='Type'
                    >
                        <MenuItem value='Bug'>Bug</MenuItem>
                        <MenuItem value='Feature'>Feature</MenuItem>
                    </Select>
                    <Select
                        name='status'
                        value={status}
                        onChange={(e) => handleChange(e)}
                        label='Status'
                    >
                        <MenuItem value='NEW'>NEW</MenuItem>
                        <MenuItem value='ACTIVE'>ACTIVE</MenuItem>
                        <MenuItem value='RESOLVED'>RESOLVED</MenuItem>
                        <MenuItem value='CLOSED'>CLOSED</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        console.log(props.storyId);
                        props.addTask(props.storyId, {
                            title: title,
                            description: description,
                            taskType: taskType,
                            status: status
                        })
                        handleClose()
                    }} color="primary">
                        submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
