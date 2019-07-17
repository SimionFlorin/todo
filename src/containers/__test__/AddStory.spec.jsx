import React from 'react';
import makeApp from '../../util/testing';
import makeSpyMiddleware from 'spy-middleware';
import {createStore} from '../../config';
import {mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

configure({adapter: new Adapter()});

import AddStory from '../AddStory.js';

describe('its working', () => {

    it('should render this', async () => {
        const spyMiddleware = makeSpyMiddleware();
        // const spyMiddleware = null;
        const store = createStore(spyMiddleware);
        const app = mount(makeApp(AddStory, store));
        console.log(app.debug());
        const input = app.find('[name="input"]')
        input.instance().value='story333'
        input.simulate('change')
        app.find('[data-testid="test"]').simulate('submit')
        console.log(spyMiddleware.getActions())
        console.log(store.getState())
    });
});
