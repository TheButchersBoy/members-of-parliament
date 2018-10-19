import {
  GET_ISSUES
} from "../actions/types";

const initialState = {
  issues: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
