export const ADD_USER = 'ADD_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const VIEW_USER = 'VIEW_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_EDIT_DATA = 'SET_EDIT_DATA';
export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const SET_MESSAGE = 'SET_MESSAGE';

export const addUser = (userData) => ({
  type: 'ADD_USER',
  payload: userData,
});

export const setUserData = (userData) => ({
  type: 'SET_USER_DATA',
  payload: userData,
});

export const getUserData = (userId) => ({
  type: 'VIEW_USER',
  payload: userId,
});

export const deleteUser = (userId) => ({
  type: 'DELETE_USER',
  payload: userId,
});

export const updateUser = (userData) => ({
  type: 'UPDATE_USER',
  payload: { _id: userData._id, ...userData }
});

export const setEditData = (editData) => ({
  type: 'SET_EDIT_DATA',
  payload: editData,
});

export const setSearchInput = (searchInput) => ({
  type: 'SET_SEARCH_INPUT',
  payload: searchInput,
});

export const setMessage = (message) => ({
  type: 'SET_MESSAGE',
  payload: message,
});

