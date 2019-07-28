import { combineReducers } from "redux";
import app from "./app/app.reducer";
import posts from "./posts/posts.reducer";
import postDetail from "./post-detail/post-detail.reducer";

const rootReducer = combineReducers({
    app,
    posts,
    postDetail,
});

export default rootReducer;