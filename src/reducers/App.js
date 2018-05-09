import {
  FETCH_GIPHY_TRENDING_REQUEST,
  FETCH_GIPHY_TRENDING_SUCCESS,
  FETCH_GIPHY_TRENDING_FAIL
} from "actions/App";

export const initAppState = {
  isLoading: false,
  trending: []
};

export default function appReducer(state = initAppState, action) {
  switch (action.type) {
    case FETCH_GIPHY_TRENDING_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_GIPHY_TRENDING_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case FETCH_GIPHY_TRENDING_SUCCESS:
      return {
        ...state,
        trending: action.data.data,
        isLoading: false
      };
    default:
      return state;
  }
}
