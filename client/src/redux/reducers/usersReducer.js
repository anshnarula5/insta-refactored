import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAIL,
    NF_USER_LIST_REQUEST,
    NF_USER_LIST_SUCCESS,
    NF_USER_LIST_FAIL,
  } from "../types";
  
  export const userLoginReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: payload };
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const userRegisterReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: payload };
      default:
        return state;
    }
  };
  
  export const userDetailsReducer = (state = { user: {} }, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: payload };
      case USER_DETAILS_RESET:
        return { user: {} };
      default:
        return state;
    }
  };
  export const userListReducer = (state = { users: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LIST_REQUEST:
        return { loading: true };
      case USER_LIST_SUCCESS:
        return { loading: false, users: payload };
      case USER_LIST_FAIL:
        return { loading: false, error: payload };
      case USER_LIST_RESET:
        return { users: [] };
      default:
        return state;
    }
  };
  export const notFollowingUsersListReducer = (state = { users: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case NF_USER_LIST_REQUEST:
        return { loading: true };
      case NF_USER_LIST_SUCCESS:
        return { loading: false, users: payload };
      case NF_USER_LIST_FAIL:
        return { loading: false, error: payload };
      default:
        return state;
    }
  };

  export const userUpdateReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_UPDATE_PROFILE_REQUEST:
        return { loading: true };
      case USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, userInfo : payload, success : true };
      case USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: payload };
      case USER_UPDATE_PROFILE_RESET:
        return {};
      default:
        return state;
    }
  };
  
export const followReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FOLLOW_REQUEST:
      return { loading: true };
    case FOLLOW_SUCCESS:
      return { loading: false, success : true };
    case FOLLOW_FAIL:
      return { loading: false, error: payload };
    
    default:
      return state;
  }
}
  
