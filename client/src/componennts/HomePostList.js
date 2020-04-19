import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPost } from "../redux/actions/postaction";
import { isAuthorized } from "../redux/actions/action";
import PostCard from "./PostCard";

class HomePostList extends Component {
  state = {
    filterByType: "",
  };

  componentWillMount() {
    if (this.props.profile.userType === "entrepreneur")
      this.setState({
        filterByType: "post",
      });
    else
      this.setState({
        filterByType: "idea",
      });
  }
  //   componentWillMount() {
  //     this.props.fetchAllPost(this.state);
  //   }

  render() {
    const { allposts, profile } = this.props;
    console.log(this.state.authReducer.profile);

    return (
      <div>
        {allposts.map((allpost, key) => (
          <PostCard key={key} allpost={allpost} />
        ))}
      </div>
    );
  }
}
const MapStateToProps = (state) => ({
  allposts: state.postReducer.allposts,
  profile: state.authReducer.profile,
});
export default connect(MapStateToProps, {
  fetchAllPost,
  isAuthorized,
})(HomePostList);
