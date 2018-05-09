import React from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  dialog: {}
});

class GiphyReview extends React.Component {
  render() {
    const { classes, giphy, onPreviewClose } = this.props;
    return (
      <Dialog
        className={classes.dialog}
        onClose={onPreviewClose}
        open={giphy !== null}
      >
        {giphy ? (
          <video alt="Full screen" src={giphy.mp4} autoPlay loop />
        ) : (
          <div />
        )}
      </Dialog>
    );
  }
}

GiphyReview.propTypes = {
  classes: PropTypes.object.isRequired,
  onPreviewClose: PropTypes.func.isRequired,
  giphy: PropTypes.object.isRequired
};

export default withStyles(styles)(GiphyReview);
