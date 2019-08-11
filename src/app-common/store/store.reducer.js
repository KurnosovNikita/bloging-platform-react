import { combineReducers } from "redux";
import app from "./app/app.reducer";
import posts from "./posts/posts.reducer";
import users from "./users/users.reducer";
import postDetail from "./post-detail/post-detail.reducer";
import userDetail from "./user-detail/user-detail.reducer";

const rootReducer = combineReducers({
    app,
    posts,
    users,
    postDetail,
    userDetail,
});

export default rootReducer;