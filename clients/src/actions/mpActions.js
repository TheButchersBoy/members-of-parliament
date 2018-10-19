import axios from "axios";

import {
  GET_MPS,
  GET_MP
} from "./types";

// Get Mps
export const getMps = () => dispatch => {
  axios
    .get("/api/mp/mps")
    .then(res => {
      dispatch({
        type: GET_MPS,
        payload: res.data
      })}
    )
    .catch(err =>
      dispatch({
        type: GET_MPS,
        payload: null
      })
    );
};

