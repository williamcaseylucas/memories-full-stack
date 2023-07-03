import { combineReducers } from "redux";
import posts from './posts'

// Since posts = posts, we can just say posts
// This is how we know we have this state to reference
export default combineReducers({
    posts
})