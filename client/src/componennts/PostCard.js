import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getonepost } from "../redux/actions/postaction";
import { getallcomment } from "../redux/actions/commentaction";
class PostCard extends React.Component {
  getallcomment = (e) => {
    e.preventDefault();
    this.props.getallcomment(this.props.post._id);
  };
  getonepost = (e) => {
    e.preventDefault();
    this.props.getonepost(this.props.post_id);
  };
  render() {
    const { post, allpost } = this.props;
    return post ? (
      <div>
        <Card tyle={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>

            <Button>
              <Link to={`/profile/${post.user}/post/${post._id}`}>
                Lire la suite
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    ) : (
      <div>
        <Card tyle={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{allpost.title}</Card.Title>
            <Card.Text>{allpost.body}</Card.Text>

            {/* <Button>
              <Link to={`/profile/${post.user}/post/${post._id}`}>
                Lire la suite
              </Link>
            </Button> */}
          </Card.Body>
        </Card>{" "}
      </div>
    );
  }
}
const mapsStateToProps = (state) => ({
  allposts: state.postReducer.allposts,
});
export default connect(mapsStateToProps, { getonepost, getallcomment })(
  PostCard
);
