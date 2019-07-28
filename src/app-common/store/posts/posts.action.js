import constants from './posts.constants';
import {getData} from '../../../utils';

const {
    REQUEST_POSTS,
    RECEIVE_POSTS,
} = constants;

export const requestPosts = () => ({
    type: REQUEST_POSTS,
});

export const receivedPosts = posts => ({
    type: RECEIVE_POSTS,
    payload: posts,
});

export const fetchPosts = (posts) => {
    return function (dispatch) {
        dispatch(requestPosts());
        return getData(posts)
          .then((resp) => resp.json())
          .then((resp) => {
              dispatch(receivedPosts(resp));
          });
    };
};