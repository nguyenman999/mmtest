import React, { Component } from "react";
import GiphyGrid from "views/components/GiphyGrid";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  app: {
    display: "flex",
    alignItems: "stretch",
    minHeight: "100vh",
    width: "100%"
  }
});

class App extends Component {
  componentDidMount() {
    const { page, perPage, push, fetchGiphyTrending } = this.props;
    const path = this.buildUrl(page, perPage);
    push(path);
    fetchGiphyTrending(page, perPage);
  }

  buildUrl = (page, perPage) => {};

  render() {
    const { classes, trending } = this.props;
    return (
      <div className={classes.app}>
        <GiphyGrid data={trending} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
