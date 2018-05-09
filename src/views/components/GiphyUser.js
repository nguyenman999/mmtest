import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  div: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    margin: 10,
    width: "30px",
    height: "30px"
  },
  typo: {
    color: "#609EC8",
    fontSize: "12px",
    fontWeight: "bold"
  }
});

class GiphyUser extends React.Component {
  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.div}>
        <Avatar
          alt={user.username}
          src={user.avatar_url}
          className={classes.avatar}
        />
        <Typography className={classes.typo} variant="title">
          {user.display_name}
        </Typography>
      </div>
    );
  }
}

GiphyUser.defaultProps = {
  user: {
    username: "",
    avatar_url: "",
    display_name: ""
  }
};

GiphyUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(GiphyUser);
