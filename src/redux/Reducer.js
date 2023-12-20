import { ADD_USER, SET_USER_DATA, VIEW_USER, DELETE_USER, UPDATE_USER, SET_SEARCH_INPUT, SET_EDIT_DATA, SET_MESSAGE } from './Actions';

const initialState = {
  users: [],
  editData: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    country: "",
    zip: "",
  },
  message: 'WELCOME TO MERN STACK PROJECT',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case VIEW_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case SET_EDIT_DATA:
      return {
        ...state,
        editData: action.payload,
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
