const ADD_POST = 'ADD_POST';

import {DATA_LIST} from '../screens/main/articles/data';

export const addPost = () => ({
  type: ADD_POST,
});

//initial state
const initialState = {
  DATA_LIST,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        data: [...state.DATA_LIST, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
