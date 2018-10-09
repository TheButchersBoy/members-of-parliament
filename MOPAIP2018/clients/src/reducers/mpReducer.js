import {
  GET_MPS,
  GET_MP
} from "../actions/types";

const initialState = {
  mps: [],
  mp: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MPS:
      return {
        ...state,
        mps: action.payload,
        loading: false
      };
    case GET_MP:
      return {
        ...state,
        mp: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
