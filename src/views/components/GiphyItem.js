import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import GiyphyImage from "views/components/GiphyImage";
import GiyphyUser from "views/components/GiphyUser";
import GiyphyAction from "views/components/GiphyAction";

const styles = theme => ({
  card: {}
});

class GiphyItem extends React.Component {
  onClick = e => {
    const { giphy, onItemClick } = this.props;
    onItemClick(giphy.images.original);
  };
  render() {
    const { classes, giphy } = this.props;
    return (
      <div onClick={this.onClick}>
        <Card className={classes.card}>
          <GiyphyImage
            images={giphy.images}
            rendition={"fixed_height"}
            title={giphy.title}
          />
          <GiyphyAction />
        </Card>
        <GiyphyUser user={giphy.user} />
      </div>
    );
  }
}

GiphyItem.propTypes = {
  classes: PropTypes.object.isRequired,
  giphy: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default withStyles(styles)(GiphyItem);
