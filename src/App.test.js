import React from 'react';
import makeApp from './util/testing';
import makeSpyMiddleware from 'spy-middleware';
import {createStore} from './config';
import {mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

configure({adapter: new Adapter()});

describe('its working', () => {

    it('should render this', async () => {
        const spyMiddleware = makeSpyMiddleware();
        const store = createStore(spyMiddleware);
        const app = mount(makeApp(() => <div>hello</div>), store);
        store.dispatch({type: 'Hello'});
        console.log(await spyMiddleware.until('Hello'));
        console.log(app.debug());
    });
});


