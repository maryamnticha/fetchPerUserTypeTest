import axios from "axios";
import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAIL,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
} from "../constants/action.type";

export const getallcomment = (user, post) => async (dispatch) => {
  dispatch({
    type: GET_COMMENT,
  });
  try {
    const postRes = await axios.get(`/profile/${user}/post/${post}`);
    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: postRes.data.comments,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENT_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const addcomment = (user, post, comment) => async (dispatch) => {
  dispatch({
    type: ADD_COMMENT,
  });
  try {
    const addResult = await axios.post(
      `/profile/${user}/post/${post}`,
      comment
    );
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: addResult.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload: error.response.data.errors,
    });
  }
};

export const editcomment = (user, post, editedcomment) => async (dispatch) => {
  dispatch({
    type: EDIT_COMMENT,
  });
  try {
    const editResult = await axios.put(
      `/profile/${user}/post/${post}`,
      editedcomment
    );
    dispatch({
      type: EDIT_COMMENT_SUCCESS,
      payload: editResult.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_COMMENT_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const deletecomment = (user, post, idtodelete) => async (dispatch) => {
  dispatch({
    type: DELETE_COMMENT,
  });
  try {
    const deleteResult = await axios.delete(
      `/profile/${user}/post/${post}`,
      idtodelete
    );
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: deleteResult.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_FAIL,
      payload: error.response.data.errors,
    });
  }
};
