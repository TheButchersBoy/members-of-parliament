import axios from "axios";

import {
  GET_MPS,
  GET_MP
} from "./types";

// Get Mps
export const getMps = () => dispatch => {
  //dispatch(setPostLoading());
  axios
    .get("/api/mps")
    .then(res =>
      dispatch({
        type: GET_MPS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MPS,
        payload: null
      })
    );
};

// Get Mp
export const getMp = id => dispatch => {
  //dispatch(setPostLoading());
  axios
    .get(`/api/mp/${id}`)
    .then(res =>
      dispatch({
        type: GET_MP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MP,
        payload: null
      })
    );
};
