import constants from './app.constants';

const {
    CHANGE_SELECTED_POST,
    CHANGE_SELECTED_USER,
} = constants;

const initialState = {
    pages: [
        {
            name: 'Home',
            href: ""
        },
        {
            name: 'Posts',
            href: "posts"
        },
        {
            name: 'Users',
            href: "users"
        }
    ],
    selectedPost: null,
    selectedUser: null,
};

const app = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_SELECTED_POST:
            return {
                ...state,
                selectedPost: payload,
            };
        case CHANGE_SELECTED_USER:
            return {
                ...state,
                selectedPost: payload,
            };
        default:
            return state;
    }
};

export default app;
