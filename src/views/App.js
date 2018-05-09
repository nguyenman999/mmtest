import React, { Component } from "react";
import GiphyGrid from "views/components/GiphyGrid";
import GiphyReview from "views/components/GiphyReview";
import ReactPaginate from "react-paginate";
import Icon from "material-ui/Icon";
import { teal } from "material-ui/colors/index";
import { withStyles } from "material-ui/styles";
import { toQueryString } from "core/Api";
import { ROUTE } from "constants/Constants";

const styles = theme => ({
  app: {
    alignItems: "stretch",
    minHeight: "100vh",
    width: "100%"
  },
  paginationContainer: {
    listStyle: "none",
    padding: theme.spacing.unit,
    position: "absolute",
    right: "0px"
  },
  paginationItem: {
    ...theme.typography.body1,
    borderRadius: "50%",
    color: "black",
    userSelect: "none",
    display: "inline-block",
    padding: "8px 0;",
    cursor: "pointer",
    verticalAlign: "middle",
    textAlign: "center",
    minWidth: "40px",
    transition: theme.transitions.create(["background-color", "box-shadow"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      background: teal["50"]
    },
    "&.selected": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    "&.disabled": {
      color: theme.palette.action.disabled,
      pointerEvents: "none"
    },
    "& a": {
      display: "block",
      width: "100%",
      "&:focus": {
        outline: "none"
      }
    }
  },
  paginationBreak: {
    display: "none"
  }
});

class App extends Component {
  componentDidMount() {
    const { page, perPage, push, fetchGiphyTrending } = this.props;
    const path = this.buildUrl(page, perPage);
    push(path);
    fetchGiphyTrending(page, perPage);
  }

  buildUrl = (page, perPage) => {
    const result = toQueryString(ROUTE.INDEX, {
      page: page,
      perPage: perPage
    });
    return result;
  };

  handlePageChange = page => {
    const { perPage, push } = this.props;
    const path = this.buildUrl(page.selected + 1, perPage);
    push(path);
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.page !== nextProps.page ||
      this.props.perPage !== nextProps.perPage
    ) {
      const { fetchGiphyTrending, page, perPage } = nextProps;
      fetchGiphyTrending(page, perPage);
    }
  }

  render() {
    const {
      classes,
      trending,
      giphy,
      page,
      perPage,
      found,
      onGiphyItemClick,
      onGiphyPreviewClose
    } = this.props;
    const totalPage = Math.ceil(found / perPage);
    return (
      <div className={classes.app}>
        <div>
          <GiphyGrid trending={trending} onItemClick={onGiphyItemClick} />
          <GiphyReview giphy={giphy} onPreviewClose={onGiphyPreviewClose} />
        </div>
        <ReactPaginate
          containerClassName={classes.paginationContainer}
          pageClassName={classes.paginationItem}
          breakClassName={classes.paginationBreak}
          previousLabel={<Icon>keyboard_arrow_left</Icon>}
          previousClassName={classes.paginationItem}
          nextLabel={<Icon>keyboard_arrow_right</Icon>}
          nextClassName={classes.paginationItem}
          pageCount={totalPage}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          forcePage={page - 1}
          onPageChange={this.handlePageChange}
          disableInitialCallback={true}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
