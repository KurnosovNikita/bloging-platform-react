import constants from './users.constants';

const {
    REQUEST_USERS,
    RECEIVE_USERS,
} = constants;

const initialState = {
    users: [],
    loading: false,
};

const users = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_USERS:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_USERS:
            return {
                ...state,
                loading: false,
                users: payload,
            };
        default:
            return state;
    }
};

export default users;
