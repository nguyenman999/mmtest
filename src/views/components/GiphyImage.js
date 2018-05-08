import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { CardMedia } from "material-ui/Card";

const styles = theme => ({
  media: {
    height: 0
  }
});

class GiphyImage extends React.Component {
  render() {
    const { classes, images, rendition, title } = this.props;
    return (
      <CardMedia
        className={classes.media}
        image={images[rendition]}
        title={title}
      />
    );
  }
}

GiphyImage.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
  rendition: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(GiphyImage);
