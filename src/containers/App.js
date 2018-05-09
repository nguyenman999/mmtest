import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";
import {
  fetchGiphyTrending,
  onGiphyItemClick,
  onGiphyPreviewClose
} from "actions/App";
import { fromQueryString } from "core/Api";
import { clamp } from "utils/App";
import { PAGINATION } from "constants/Constants";
import App from "views/App";

const parseQuery = searchString => {
  const queries = fromQueryString(searchString);
  let page = clamp(queries.page, PAGINATION.MIN_PAGE, PAGINATION.MAX_PAGE);
  page = isNaN(page) ? PAGINATION.MIN_PAGE : page;
  let perPage = clamp(
    queries.perPage,
    PAGINATION.MIN_PER_PAGE,
    PAGINATION.MAX_PER_PAGE
  );
  perPage = isNaN(perPage) ? PAGINATION.MIN_PER_PAGE : perPage;
  return {
    page,
    perPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { push, fetchGiphyTrending, onGiphyItemClick, onGiphyPreviewClose },
    dispatch
  );
};

const mapStateToProps = state => {
  const queries = parseQuery(state.router.location.search);
  return {
    ...state.app,
    page: queries.page,
    perPage: queries.perPage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
