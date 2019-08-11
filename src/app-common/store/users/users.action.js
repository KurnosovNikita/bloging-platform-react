import constants from './users.constants';
import {getData} from '../../../utils';

const {
    REQUEST_USERS,
    RECEIVE_USERS,
} = constants;

export const requestUsers = () => ({
    type: REQUEST_USERS,
});

export const receivedUsers = users => ({
    type: RECEIVE_USERS,
    payload: users,
});

export const fetchUsers = (users) => {
    return function (dispatch) {
        dispatch(requestUsers());
        return getData(users)
          .then((resp) => resp.json())
          .then((resp) => {
              dispatch(receivedUsers(resp));
          });
    };
};