import {
  GET_ISSUES,
  GET_ISSUE
} from "../actions/types";

const initialState = {
  issues: [],
  issue: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
        loading: false
      };
    case GET_ISSUE:
      return {
        ...state,
        issue: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
