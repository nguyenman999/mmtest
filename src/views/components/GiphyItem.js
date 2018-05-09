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
  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <GiyphyImage
            images={data.images}
            rendition={"fixed_height"}
            title={data.title}
          />
          <GiyphyAction />
        </Card>
        <GiyphyUser user={data.user} />
      </div>
    );
  }
}

GiphyItem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(GiphyItem);
