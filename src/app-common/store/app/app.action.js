import constants from './app.constants';

const {
    CHANGE_SELECTED_POST,
    CHANGE_SELECTED_USER,
} = constants;

export const changeSelectedPost = post => (
  {
      type: CHANGE_SELECTED_POST,
      payload: post
  });
export const changeSelectedUser = post => (
  {
      type: CHANGE_SELECTED_USER,
      payload: post
  });