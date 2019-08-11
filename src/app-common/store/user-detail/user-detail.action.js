import constants from './user-detail.constants';

const {
    SELECT_USER,
} = constants;

export const selectUser = user => ({
    type: SELECT_USER,
    payload: user,
});