import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";
import { fetchGiphyTrending } from "actions/App";
import App from "views/App";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ push, fetchGiphyTrending }, dispatch);
};

const mapStateToProps = state => {
  return {
    ...state.app
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
