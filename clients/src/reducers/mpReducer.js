import {
  GET_MPS
} from "../actions/types";

const initialState = {
  mps: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MPS:
      return {
        ...state,
        mps: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
