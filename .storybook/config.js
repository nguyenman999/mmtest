import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import MMTheme from "themes/MMTheme";

const theme = createMuiTheme(MMTheme);

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    <div className="container">{story()}</div>
  </MuiThemeProvider>
));

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
