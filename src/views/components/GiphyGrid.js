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
    const { classes, trending } = this.props;
    const gridItems = trending.map((giphy, idx) => {
      return (
        <Grid item key={idx} xs={6} sm={4} md={4} lg={3} xl={3}>
          <GiphyItem giphy={giphy} onItemClick={this.props.onItemClick} />
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

GiphyGrid.defaultProps = {
  trending: []
};

GiphyGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  trending: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default withStyles(styles)(GiphyGrid);
