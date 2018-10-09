import axios from "axios";

import {
  GET_ISSUES,
  GET_ISSUE
} from "./types";

// Get Issues
export const getIssues = () => dispatch => {
  //dispatch(setPostLoading());
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

// Get Issue
export const getIssue = id => dispatch => {
  //dispatch(setPostLoading());
  axios
    .get(`/api/issues/issue/${id}`)
    .then(res =>
      dispatch({
        type: GET_ISSUE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ISSUE,
        payload: null
      })
    );
};
