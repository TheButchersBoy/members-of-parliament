import axios from "axios";

import {
  GET_ISSUES
} from "./types";

// Get Issues
export const getIssues = () => dispatch => {
  axios
    .get("/api/issues/issues")
    .then(res =>
      dispatch({
        type: GET_ISSUES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ISSUES,
        payload: null
      })
    );
};
