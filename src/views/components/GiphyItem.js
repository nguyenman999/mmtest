import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";

const styles = theme => ({
  card: {}
});

class GiphyItem extends React.Component {
  render() {
    const { classes } = this.props;
    return <Card className={classes.card} />;
  }
}

GiphyItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiphyItem);
