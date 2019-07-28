import constants from './app.constants';

const {
    CHANGE_SELECTED_POST,
} = constants;

export const changeSelectedPost = post => (
  {
      type: CHANGE_SELECTED_POST,
      payload: post
  });