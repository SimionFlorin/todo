// import thunk from "redux-thunk";
// import {compose, applyMiddleware, createStore} from 'redux';
// import rootReducer from '../reducers/index.js';
//
// const noOp = () => {
// };
//
// export default (spyMiddleware = noOp) => {
//     const middleware = [
//         thunk,
//         spyMiddleware
//     ];
//     const composeEnhancers =
//         process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//             ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//                 shouldHotReload: false, // Prevent recomputing reducers for `replaceReducer`
//             })
//             : compose;
//
//     const enhancers = [applyMiddleware(...middleware)];
//     return createStore(rootReducer, composeEnhancers(...enhancers));
// }

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';


const configureStore = (spyMiddleware) => {

    const middleware = [
        thunk,
    ];

    if(spyMiddleware) middleware.push(spyMiddleware);

    const enhancers = [applyMiddleware(...middleware)];

    // Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false, // Prevent recomputing reducers for `replaceReducer`
            })
            : compose;

    return createStore(
        rootReducer,
        composeEnhancers(...enhancers)
    );
};

export default configureStore;
