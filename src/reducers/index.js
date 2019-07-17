import {combineReducers} from "redux";
import stories from "./stories";
import tasks from './tasks';


export default combineReducers({
    stories,
    tasks
})
