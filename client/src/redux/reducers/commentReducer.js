import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT,
  EDIT_COMMENT,
  EDIT_COMMENT_FAIL,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT,
} from "../constants/action.type";
const initialState = {
  errors: [],
  comments: [],
  comment: null,
  editedcomment: {},
  idtodelete: {},
};
const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENT:
      return {
        ...state,
      };
    case GET_COMMENT_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };

    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        isloading: false,
        comments: payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        isloading: true,
      };
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isloading: false,
        comment: payload,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        isloading: true,
      };
    case EDIT_COMMENT_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        editedcomment: payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
      };
    case DELETE_COMMENT_FAIL:
      return {
        ...state,

        errors: payload,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        idtodelete: payload,
      };
    default:
      return state;
  }
};
export default commentReducer;
