import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actions";

const initialState = {
  count: 0,
};

const qtReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: Math.min(state.count + 1),
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: Math.max(state.count - 1, 0),
      };
    default:
      return state;
  }
};

export default qtReducers;
