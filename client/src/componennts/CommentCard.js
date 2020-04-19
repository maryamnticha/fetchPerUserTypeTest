import React, { Component } from "react";
import { connect } from "react-redux";
import { getallcomment, deletecomment } from "../redux/actions/commentaction";
import "../App.css";
import { Alert } from "react-bootstrap";
import EditcommentModal from "./EditcommentModal";
class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    if (this.props.comment)
      this.setState({
        id: this.props.comment._id,
      });
  }

  toggleModal = () => this.setState({ show: !this.state.show });

  deletecomment = (e) => {
    this.props.deletecomment(
      this.props.comment.user,
      this.props.comment.post,
      this.state
    );
  };
  refreshPage = (e) => {
    window.location.reload(false);
  };
  render() {
    const { comment } = this.props;
    const { body } = comment;
    return (
      <Alert variant="info">
        <p> {body}</p>
        <button
          onClick={() => {
            this.toggleModal();
          }}
        >
          EDIT
        </button>

        <button onClick={(this.refreshPage, this.deletecomment)}>
          {" "}
          delete
        </button>

        {this.state.show && (
          <EditcommentModal
            show={this.state.show}
            toggleModal={this.toggleModal}
            comment={this.props.comment}
          />
        )}
      </Alert>
    );
  }
}
const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
});
export default connect(mapStateToProps, { getallcomment, deletecomment })(
  CommentCard
);
