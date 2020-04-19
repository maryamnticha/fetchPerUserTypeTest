import React from "react";
import { Button, Jumbotron, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import EditModal from "./EditModal";

import { getonepost, deletepost } from "../redux/actions/postaction";
import CommentCard from "./CommentCard";
import { getallcomment, addcomment } from "../redux/actions/commentaction";
class OnePostCard extends React.Component {
  state = { show: false, isEdit: false, body: "" };
  componentDidMount() {
    this.props.getonepost(
      this.props.match.params.user,
      this.props.match.params.post
    );
  }
  componentWillMount() {
    this.props.getallcomment(
      this.props.match.params.user,
      this.props.match.params.post
    );
  }
  addcomment = (e) => {
    e.preventDefault();
    this.props.addcomment(
      this.props.match.params.user,
      this.props.match.params.post,
      this.state
    );
  };

  deletepost = (e) => {
    e.preventDefault();
    this.props.deletepost(this.props.onepost._id);
    console.log(this.props);
  };
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  toggleModal = () => this.setState({ show: !this.state.show });
  render() {
    const { onepost, comments } = this.props;
    const { title, body, link, date } = onepost;

    return (
      <div>
        <Jumbotron>
          <h3>{title}</h3>
          <h5>{body}</h5>
          <h5>{link}</h5>
          <h6>{date}</h6>

          <Button
            variant="warning"
            onClick={() => {
              this.toggleModal();
            }}
          >
            EDIT
          </Button>
          {this.state.show && (
            <EditModal
              show={this.state.show}
              toggleModal={this.toggleModal}
              onepost={this.props.onepost}
            />
          )}
          <Button variant="danger" onClick={this.deletepost}>
            DELETE
          </Button>
        </Jumbotron>
        <div>
          {comments.map((comment, key) => (
            <CommentCard key={key} comment={comment} />
          ))}
        </div>
        <div onSubmit={this.refreshPage}>
          <form onSubmit={this.addcomment}>
            <input
              name="body"
              placeholder="Your comment ...."
              onChange={this.changeHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  onepost: state.postReducer.onepost,
  comments: state.commentReducer.comments,
  comment: state.commentReducer.comment,
});
export default connect(mapStateToProps, {
  getonepost,
  getallcomment,
  deletepost,
  addcomment,
})(OnePostCard);
