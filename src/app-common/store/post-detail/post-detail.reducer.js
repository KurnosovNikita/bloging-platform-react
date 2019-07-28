import constants from './post-detail.constants';

const {
    SELECT_POST,
} = constants;

const initialState = {
    selectedPost: null,
};

const postDetail = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_POST:
            return {
                ...state,
                selectedPost: payload,
            };
        default:
            return state;
    }
};

export default postDetail;
