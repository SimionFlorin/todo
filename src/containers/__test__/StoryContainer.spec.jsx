import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import StoryContainer from "../StoryContainer";
import makeSpyMiddleware from 'spy-middleware';
import { createStore } from "../../config";
import makeApp from "../../util/testing";
import {mount} from 'enzyme';
import AddStory from './../AddStory';
import { addTaskToStory, addStory } from "../../actions";

configure({adapter: new Adapter()})

describe('StoryContainer tests',()=>{
    
    it(' should add  a Task to store', async ()=>{

        const task={
            title:'task2',
            description:'taskul jmecher',
            taskType:'Bug',
            status:'NEW'
          }
          const spyMiddleware = makeSpyMiddleware();
          const store = createStore(spyMiddleware);
      
        const app = mount(makeApp(StoryContainer, store));
        store.dispatch(addStory('story1'))
            app.update()

          console.log(app.debug())
          console.log('button');
          
          expect(app.find('[data-testid="AddTaskDialog"]').at(0).prop('open')).toBe(false)
          const button=app.find('[data-testid="dialog-open-button"]')
          button.simulate('click')
          const dialog=app.find('[data-testid="AddTaskDialog"]').at(0)
           expect(dialog.prop('open')).toBe(true)
            const title=dialog.find('input').at(0)
            title.instance().value='task1'
            title.simulate('change')
            const description=dialog.find('input').at(1)
            description.instance().value='description of the task1'
            description.simulate('change')
            const taskType=dialog.find('input').at(2)
            taskType.instance().value='Feature'
            taskType.simulate('change')
            const status=dialog.find('input').at(3)
            status.instance().value='NEW'
            status.simulate('change')
            dialog.find('button').last().simulate('click')
            console.log(spyMiddleware.getActions())
            console.log(store.getState())
            expect(store.getState().tasks[0].title).toBe('task1')
            expect(store.getState().tasks[0].id).toBeTruthy()
            expect(store.getState().stories[0].taskIds[0]).toBe(store.getState().tasks[0].id)
        



          console.log(button)

          


          
    }
    )

})