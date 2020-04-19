import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/action";
import { getallpost } from "../redux/actions/postaction";
import { isAuthorized } from "../redux/actions/action";
import { fetchAllPost } from "../redux/actions/postaction";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import PostCard from "./PostCard";
class Home extends Component {
  state = {
    postType1: "post",
  };
  componentDidMount() {
    this.props.isAuthorized();
    // if (this.props.profile.userType === "entrepreneur")
    //     this.setState({
    //       postType1: "post",
    //     });
    //   else
    //     this.setState({
    //       postType1: "idea",
    //     });
    this.props.fetchAllPost(this.state);
  }

  logout = (e) => {
    e.preventDefault();
    this.props.logout(this.state);
  };

  render() {
    const { profile, allposts } = this.props;

    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">This is the USER HOME</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">ARTICLE</Nav.Link>
            <Nav.Link href="#pricing">IDEAS</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="Login" type="submit" name="submit">
              <Link className="Login" to="/profile">
                See the Profile
              </Link>
            </Button>

            <Button className="Login" variant="danger" onClick={this.logout}>
              <Link className="Login" to="/">
                Logout
              </Link>
            </Button>
          </Form>
        </Navbar>
        <div>
          {allposts.map((allpost, key) => (
            <PostCard key={key} allpost={allpost} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
  allposts: state.postReducer.allposts,
});
export default connect(mapStateToProps, {
  isAuthorized,
  fetchAllPost,
  logout,
})(Home);
