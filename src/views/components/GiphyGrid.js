import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import GiphyItem from "views/components/GiphyItem";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class GiphyGrid extends React.Component {
  render() {
    const { classes, data } = this.props;
    const gridItems = data.map(giphy => {
      return (
        <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
          <GiphyItem data={giphy} />
        </Grid>
      );
    });
    return (
      <Grid container className={classes.root} spacing={16}>
        {gridItems}
      </Grid>
    );
  }
}

GiphyGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(GiphyGrid);
