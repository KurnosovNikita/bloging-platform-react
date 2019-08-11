import constants from './user-detail.constants';

const {
    SELECT_USER,
} = constants;

const initialState = {
    selectedUser: null,
};

const userDetail = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_USER:
            return {
                ...state,
                selectedUser: payload,
            };
        default:
            return state;
    }
};

export default userDetail;
