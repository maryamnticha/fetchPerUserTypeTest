import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { isAuthorized } from "../redux/actions/action";
import { getallpost, addpost } from "../redux/actions/postaction";
import { Button } from "react-bootstrap";
// import PostList from "./PostList";
class Profile extends React.Component {
  componentDidMount() {
    this.props.isAuthorized();
  }
  // getallpost = (e) => {
  //   e.preventDefault();
  //   this.props.getallpost(this.state);
  // };

  render() {
    const { isAuth, profile } = this.props;
    return !isAuth ? (
      <Redirect to="/home" />
    ) : this.props.profile.userType === "entrepreneur" ? (
      <div>
        <pre>
          <h5>this is entreprneur user </h5>
          <code>{JSON.stringify(profile.name)}</code>
        </pre>
        <Button>
          <Link to={`/profile/${profile._id}/getAllPost`}>POSTS</Link>
        </Button>
        <Button>
          <Link to={`/profile/${profile._id}/add`}>ADD Post</Link>
        </Button>
      </div>
    ) : (
      <div>
        <pre>
          <h5> This is junior user </h5>
          <code>{JSON.stringify(profile.name)}</code>
        </pre>
        <Button>
          <Link to={`/profile/${profile._id}/getAllPost`}>Ideas </Link>
        </Button>
        <Button>
          <Link to={`/profile/${profile._id}/add`}>ADD IDea</Link>
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
  posts: state.postReducer.posts,
  post: state.postReducer.post,
});
export default connect(mapStateToProps, { getallpost, isAuthorized, addpost })(
  Profile
);
