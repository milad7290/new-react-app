import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./home.css";
import { fetchPosts } from "./redux/home-actions";
import { getPosts } from "./redux/home-selector";

class Home extends Component {
  state = {
    activeStep: 0,
  };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  // test = () => {
  //   this.setState({
  //     activeStep: 1,
  //   });
  // };

  render() {
    const { postList, postListLoading } = this.props;
    // const { activeStep } = this.state;

    console.log("postList", postList, postListLoading);
    return (
      <div className="App">
        <header className="App-header">
          <p>{postList.toString()}</p>
          {/* <button onClick={this.test}></button> */}
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
