import React from 'react';
import makeSpyMiddleware  from 'spy-middleware';
import { createStore } from '../../config';
import makeApp from './../../util/testing';
import TaskContainer from '../TaskContainer';
import { addStory, addTaskToStory, TaskStatus } from '../../actions';
import {mount}  from 'enzyme';
import { configure } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()})

describe('testing update taskStatus', () => {

    it('should open Dialog and update task status',()=>{
        const spyware=makeSpyMiddleware()
        const store=createStore(spyware)
        store.dispatch(addStory('story1'))
        store.dispatch(addTaskToStory(store.getState().stories[0].id,{title:'task1',description:'description of task1',taskType:'BUG',status:'NEW'}))
        const app = mount(makeApp(()=>  
        <TaskContainer 
        title={' test tile '} description={' test description '}
            taskType={'Bug'} status={'NEW'}
            id={store.getState().tasks[0].id} data-testid={''}
        />, store))
        
        store.dispatch(addStory('story1'))
        store.dispatch(addTaskToStory(store.getState().stories[0].id,{title:'task1',description:'description of task1',taskType:'BUG',status:'NEW'}))
        // const app=mount(makeApp(TaskContainer,store))
        // app.update()
        // console.log(store.getState())
        // const taskTag=app.find('[data-testid="story1"]').at(0).find('[data-testid="task1"]').at(0)
        // console.log(taskTag.debug())
        app.find('li').at(0).simulate('click')
        const dialog=app.find('[data-testid="UpdateTaskStatusDialog"]').at(0)
        expect(dialog.prop('open')).toBe(true)
        // console.log(dialog.debug())
        const status=dialog.find('select').last()
            // status.instance().value='ACTIVE'
            status.simulate("change", { target: { value: TaskStatus }})
            console.log(status.debug());
            
        app.find('button').last().simulate('click')
        console.log(spyware.getActions())
        expect(app.find('[data-testid="UpdateTaskStatusDialog"]').at(0).prop('open')).toBe(false)
        expect(store.getState().tasks[0].status).toBe(TaskStatus.ACTIVE)
        
    })
    
})
