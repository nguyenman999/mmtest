import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class GiphyGrid extends React.Component {
  render() {
    const { classes } = this.props;
    return <Grid container className={classes.root} spacing={16} />;
  }
}

GiphyGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiphyGrid);
