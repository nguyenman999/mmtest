import appReducer, { initAppState } from "reducers/App";
import * as appAction from "actions/App";

describe("AppReducer", () => {
  it("should return initial state", () => {
    const expected = {
      ...initAppState
    };
    expect(appReducer(undefined, {})).toEqual(expected);
  });

  it("should update show loading on FETCH_GIPHY_TRENDING_REQUEST", () => {
    const expected = {
      ...initAppState,
      isLoading: true
    };
    const action = {
      type: appAction.FETCH_GIPHY_TRENDING_REQUEST
    };
    expect(appReducer(undefined, action)).toEqual(expected);
  });

  it("should update hide loading on FETCH_GIPHY_TRENDING_FAIL", () => {
    const expected = {
      ...initAppState,
      isLoading: false
    };
    const action = {
      type: appAction.FETCH_GIPHY_TRENDING_FAIL
    };
    expect(appReducer(undefined, action)).toEqual(expected);
  });

  it("should update trending data on FETCH_GIPHY_TRENDING_SUCCESS", () => {
    const expected = {
      ...initAppState,
      isLoading: false,
      trending: [],
      found: 0
    };
    const action = {
      type: appAction.FETCH_GIPHY_TRENDING_SUCCESS,
      data: { data: [], pagination: { total_count: 0 } }
    };
    expect(appReducer(undefined, action)).toEqual(expected);
  });

  it("should update giphy data ON_GIPHY_ITEM_CLICK ", () => {
    const expected = {
      ...initAppState,
      giphy: { test: "123" }
    };
    const action = {
      type: appAction.ON_GIPHY_ITEM_CLICK,
      data: { test: "123" }
    };
    expect(appReducer(undefined, action)).toEqual(expected);
  });

  it("should update giphy data ON_GIPHY_PREVIEW_CLOSE ", () => {
    const expected = {
      ...initAppState,
      giphy: null
    };
    const action = {
      type: appAction.ON_GIPHY_PREVIEW_CLOSE
    };
    expect(appReducer(undefined, action)).toEqual(expected);
  });
});
