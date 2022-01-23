import { createStore } from 'redux'
import likesReducer from './reducers/likes'


export default createStore(likesReducer)