import constants from './app.constants';

const {
    CHANGE_SELECTED_POST,
} = constants;

const initialState = {
    selectedPost: null,
};

const app = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_SELECTED_POST:
            return {
                ...state,
                selectedPost: payload,
            };
        default:
            return state;
    }
};

export default app;
