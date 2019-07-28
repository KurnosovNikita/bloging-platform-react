import constants from './post-detail.constants';

const {
    SELECT_POST,
} = constants;

export const selectPost = post => ({
    type: SELECT_POST,
    payload: post,
});