import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./home.scss";
import { fetchPosts } from "./redux/home-actions";
import { getPosts } from "./redux/home-selector";

class Home extends Component {
  state = {
    activeStep: 0,
  };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  /**
   * start render dom
   * * test method for update state
   * ! its a test method must be deleted
   * ? test in
   * TODO test todo
   * @param myParam
   */
  test = () => {
    this.setState({
      activeStep: 1,
    });
  };

  render() {
    const { postList, postListLoading } = this.props;
    // const { activeStep } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>{postList.toString()}</p>
          <button onClick={this.test}></button>
          <Button variant="contained" color="primary" disableElevation>
            Disable elevation
          </Button>
          <Link to="/aboutUs">درباره ما</Link>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const result = getPosts(state);

  return {
    postList: result && result.data ? result.data : [],
    postListLoading: result.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    },
  };
};

Home.propTypes = {
  postList: PropTypes.array,
  fetchPosts: PropTypes.func,
  postListLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
