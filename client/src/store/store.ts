// import { configureStore, MiddlewareArray, compose, createSlice, StoreCreator, Store } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import reducers from '../reducer/reducer'

// const counterReducer = () => { }


// // const slice = createSlice({
// //     name: 'Typescript',
// //     initialState: {
// //         counter: 1
// //     }
// // })

// const store: Store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export default store
import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "../reducer/reducer";
import thunk from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch
export default store