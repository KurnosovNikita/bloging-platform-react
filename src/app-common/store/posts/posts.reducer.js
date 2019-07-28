import constants from './posts.constants';

const {
    REQUEST_POSTS,
    RECEIVE_POSTS,
} = constants;

const initialState = {
    posts: [],
    loading: false,
};

const posts = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_POSTS:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                loading: false,
                posts: payload,
            };
        default:
            return state;
    }
};

export default posts;
