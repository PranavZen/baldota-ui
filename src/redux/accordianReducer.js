import { TOGGLE_ACCORDION } from "./actions";


const initialState = {
  openIndex: null,
};

const accordianReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCORDION:
      return {
        ...state,
        openIndex: state.openIndex === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default accordianReducer;
