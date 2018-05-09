import {
  FETCH_GIPHY_TRENDING_REQUEST,
  FETCH_GIPHY_TRENDING_SUCCESS,
  FETCH_GIPHY_TRENDING_FAIL,
  ON_GIPHY_ITEM_CLICK,
  ON_GIPHY_PREVIEW_CLOSE
} from "actions/App";

export const initAppState = {
  isLoading: false,
  trending: [],
  giphy: null,
  found: 0
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
        found: action.data.pagination.total_count,
        isLoading: false
      };
    case ON_GIPHY_ITEM_CLICK:
      return {
        ...state,
        giphy: action.data
      };
    case ON_GIPHY_PREVIEW_CLOSE:
      return {
        ...state,
        giphy: null
      };
    default:
      return state;
  }
}
