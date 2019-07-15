import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Divider, Select, MenuItem } from '@material-ui/core';
import { TaskStatusEnum, TaskStatus} from '../actions';
import { updateTaskStatus } from './../actions/index';
import { PropTypes } from 'prop-types';

const Task=(props)=>{

    const [open,setOpen]=React.useState('false')
    const [status,setStatus]=React.useState(props.status)
    
    const handleChange=(e)=>{
        if(e.target.name==='status')
            setStatus(e.target.value)
    }

    return(
        <React.Fragment>
        <li onClick={()=>setOpen(true)}>
            {props.title}
        </li>
        <Dialog open={open===true} onClose={()=>setOpen('false')}>
        <DialogContent>
            <DialogTitle>
                {props.title}
            </DialogTitle>
            <DialogContentText>
                Description: {props.description}
                <Divider/>
                Type: {props.taskType}
                <Divider/>
                <Select
                    name='status'
                    value={status}
                    onChange={(e)=>handleChange(e)}
                    label='Status'
                    >{TaskStatusEnum.map((TaskStatus)=>(
                        <MenuItem value={TaskStatus}>{TaskStatus}</MenuItem>
                    ))}
                </Select>
            </DialogContentText>
            <DialogActions>
                <button onClick={()=>setOpen('false')}>
                    Cancel
                </button>
                <button onClick={()=>{props.updateTaskStatusDispatch(props.id,status)
                setOpen('false')
                }}>
                    Change Status
                </button>
                {/* <button onClick={()=>console.log(props)}>
                    testareCLG
                    </button> */}
            </DialogActions>
        </DialogContent>
    </Dialog>
    </React.Fragment>
    )
} 


// Task.propTypes ={
//     tasks: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             taskType: PropTypes.string.isRequired,
//             status :PropTypes.string.isRequired
//         })
//     ),
//     updateTaskStatus:PropTypes.func.isRequired
// }
export default Task