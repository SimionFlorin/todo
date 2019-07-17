import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from '../config'

const makeApp = (Cmp, store) => {
    return (
        <Provider store={store || createStore()}>
            <Cmp/>
        </Provider>
    );
};

export default makeApp;
