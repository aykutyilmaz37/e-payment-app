import { SELECTED_PACKAGES, LOGIN, LOGOUT } from './types';

const initialState = {
  isAuthenticated: !!localStorage.getItem('user'),
  user: localStorage.getItem('user') !== null ? JSON.parse(window.atob(localStorage.getItem('user') || '{}')) : null,
  selectedPackages: localStorage.getItem('selectedPackages') !== null ? JSON.parse(localStorage.getItem('selectedPackages') || '{}') : [],
};

const appReducer = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SELECTED_PACKAGES:
      return {
        ...state,
        selectedPackages: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
