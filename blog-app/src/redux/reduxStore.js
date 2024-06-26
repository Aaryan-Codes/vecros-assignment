import {configureStore} from '@reduxjs/toolkit';
import blogReducers from './reducers/blogReducers';
import tileReducers from './reducers/tileReducers';


export const store = configureStore({
    reducer:{
        blogReducer : blogReducers,
        tileReducer:tileReducers
    }
})

