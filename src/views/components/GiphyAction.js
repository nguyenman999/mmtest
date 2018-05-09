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
  icon: {
    width: "30px"
  },
  typo: {
    color: "#C6CBD4",
    fontSize: "10px",
    fontWeight: "bold"
  }
});

class GiphyAction extends React.Component {
  render() {
    const { classes, heart, comment, view } = this.props;
    return (
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Share">
          <Icon className={classes.icon}>attach_file</Icon>
        </IconButton>
        <div className={classes.div} />
        <IconButton aria-label="View">
          <Icon className={classes.icon}>visibility</Icon>
          <Typography className={classes.typo} variant="body2">
            {view}
          </Typography>
        </IconButton>
        <IconButton aria-label="Comment">
          <Icon className={classes.icon}>mode_comment</Icon>
          <Typography className={classes.typo} variant="body2">
            {comment}
          </Typography>
        </IconButton>
        <IconButton aria-label="Heart">
          <Icon className={classes.icon}>favorite</Icon>
          <Typography className={classes.typo} variant="body2">
            {heart}
          </Typography>
        </IconButton>
      </CardActions>
    );
  }
}

GiphyAction.propTypes = {
  classes: PropTypes.object.isRequired,
  heart: PropTypes.number,
  comment: PropTypes.number,
  view: PropTypes.number
};

export default withStyles(styles)(GiphyAction);
