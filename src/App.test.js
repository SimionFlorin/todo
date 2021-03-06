import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import thunk from "redux-thunk"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose,applyMiddleware,createStore} from 'redux'
import rootReducer from './reducers/index.js' //ToDo: creare reducer
import stories from './reducers/stories';
import tasks from './reducers/tasks';
import { TaskStatus } from './actions';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

test('test1',()=>{
  expect(1).toBe(1)
})
const story1={id:1,title:'story1',taskIds:[1]}

test('addStory',()=>{
  expect(
    stories([story1],{type:'ADD_STORY',id:2,title:'story2'})
    ).toStrictEqual([{id:2,title:'story2',taskIds:[]},story1])
})
const addTaskActionTest={
  type:'ADD_TASK',
  id:2,
  storyId:1,
  task:{
    title:'task2',
    description:'taskul jmecher',
    taskType:'Bug',
    status:'NEW'
  }
}
test('addTask, added Id to Story',()=>{
  expect(stories([story1],addTaskActionTest))
  .toStrictEqual([Object.assign({},story1,{taskIds:[1,2]})])
})
const task2=Object.assign({},addTaskActionTest.task,{id:2})
it('addTask added Task Object in state',()=>{
  expect(tasks([],addTaskActionTest)).toStrictEqual(
    [task2]
  )
})

test('update Status',()=>{
  expect(tasks([task2],{type:'UPDATE_STATUS',taskId:2,status:TaskStatus.ACTIVE}))
  .toStrictEqual([Object.assign({},task2,{status:'ACTIVE'})])

})



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <App />
 </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

