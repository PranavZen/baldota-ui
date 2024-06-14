import { TOGGLE_ACCORDIAN } from "./actions";

const initialState = {
  openIndex: null,
};

const accordianReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCORDIAN:
      return {
        ...state,
        openIndex: state.openIndex === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default accordianReducer;
