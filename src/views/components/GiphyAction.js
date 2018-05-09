import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Typography from "material-ui/Typography";

const styles = theme => ({
  actions: {
    height: 50,
    display: "flex"
  },
  div: {
    flex: "1 1 auto"
  },
  typo: {
    color: "#C6CBD4",
    fontSize: "10px",
    fontWeight: "bold"
  }
});

class GiphyAction extends React.Component {
  render() {
    const { classes, heart, comment, view, share } = this.props;
    return (
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Share">
          <Icon>attach_file</Icon>
        </IconButton>
        <div className={classes.div} />
        <IconButton aria-label="View">
          <Icon>visibility</Icon>
          <Typography className={classes.typo} variant="body2">
            {10}
          </Typography>
        </IconButton>
        <IconButton aria-label="Comment">
          <Icon>mode_comment</Icon>
          <Typography className={classes.typo} variant="body2">
            {10}
          </Typography>
        </IconButton>
        <IconButton aria-label="Heart">
          <Icon>favorite</Icon>
          <Typography className={classes.typo} variant="body2">
            {10}
          </Typography>
        </IconButton>
      </CardActions>
    );
  }
}

GiphyAction.propTypes = {
  classes: PropTypes.object.isRequired,
  heart: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
  share: PropTypes.number.isRequired
};

export default withStyles(styles)(GiphyAction);
