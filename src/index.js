import React from "react";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import MMTheme from "themes/MMTheme";
import App from "containers/App";
import appReducer from "reducers/App";

const reducers = combineReducers({
  app: appReducer,
  router: routerReducer
});

const history = createBrowserHistory();

const middlewares = applyMiddleware(logger, thunk, routerMiddleware(history));

const store = createStore(reducers, middlewares);

const theme = createMuiTheme(MMTheme);

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
