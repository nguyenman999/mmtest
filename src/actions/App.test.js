import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as AppAction from "actions/App";
import { API_URL, API_KEY } from "constants/Api";
import { getApiUrl, fetchFromApi } from "core/Api";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("apiActions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should create an action to fetchGiphyTrending", () => {
    const url = getApiUrl(API_URL.FETCH_TRENDING, {
      api_key: API_KEY,
      limit: 20,
      offset: 0
    });
    fetchMock.get(url, []);
    const expectedActions = [
      { type: AppAction.FETCH_GIPHY_TRENDING_REQUEST },
      {
        type: AppAction.FETCH_GIPHY_TRENDING_SUCCESS,
        data: []
      }
    ];
    const store = mockStore({});
    return store.dispatch(AppAction.fetchGiphyTrending(1, 20)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create an action to ON_GIPHY_ITEM_CLICK", () => {
    const expected = {
      type: AppAction.ON_GIPHY_ITEM_CLICK,
      data: {}
    };
    expect(AppAction.onGiphyItemClick({})).toEqual(expected);
  });

  it("should create an action to ON_GIPHY_PREVIEW_CLOSE", () => {
    const expected = {
      type: AppAction.ON_GIPHY_PREVIEW_CLOSE
    };
    expect(AppAction.onGiphyPreviewClose()).toEqual(expected);
  });
});
