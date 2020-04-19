import React, { Component } from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PostCard from "./PostCard";

import { connect } from "react-redux";
import { getallpost } from "../redux/actions/postaction";
import { getallcomment } from "../redux/actions/commentaction";
import { isAuthorized } from "../redux/actions/action";
import { fetchAllPost } from "../redux/actions/postaction";

class PostList extends Component {
  componentDidMount = () => {
    this.props.getallpost(this.props.match.params.id);
  };
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  allposts: state.postReducer.allposts,
});

export default connect(MapStateToProps, {
  isAuthorized,
  getallpost,
  getallcomment,
})(PostList);
