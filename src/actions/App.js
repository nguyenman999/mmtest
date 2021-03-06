import { API_URL, API_KEY } from "constants/Api";
import { getApiUrl, makeApiParams, fetchFromApi } from "core/Api";

export const FETCH_GIPHY_TRENDING_REQUEST = "FETCH_GIPHY_TRENDING_REQUEST";
export const FETCH_GIPHY_TRENDING_SUCCESS = "FETCH_GIPHY_TRENDING_SUCCESS";
export const FETCH_GIPHY_TRENDING_FAIL = "FETCH_GIPHY_TRENDING_FAIL";
export const fetchGiphyTrending = (page, perPage) => {
  return dispatch => {
    const url = getApiUrl(API_URL.FETCH_TRENDING, {
      api_key: API_KEY,
      limit: perPage,
      offset: (page - 1) * perPage
    });
    const params = makeApiParams("GET");
    dispatch({ type: FETCH_GIPHY_TRENDING_REQUEST });
    return fetchFromApi(
      dispatch,
      url,
      params,
      FETCH_GIPHY_TRENDING_SUCCESS,
      FETCH_GIPHY_TRENDING_FAIL
    );
  };
};

export const ON_GIPHY_ITEM_CLICK = "ON_GIPHY_ITEM_CLICK";
export const onGiphyItemClick = value => {
  return {
    type: ON_GIPHY_ITEM_CLICK,
    data: value
  };
};

export const ON_GIPHY_PREVIEW_CLOSE = "ON_GIPHY_PREVIEW_CLOSE";
export const onGiphyPreviewClose = () => {
  return {
    type: ON_GIPHY_PREVIEW_CLOSE
  };
};
