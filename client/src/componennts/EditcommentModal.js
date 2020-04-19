import React from "react";
import { Modal } from "react-bootstrap";
import { editcomment } from "../redux/actions/commentaction";
import { connect } from "react-redux";

class EditcommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      body: "",
    };
  }
  componentDidMount() {
    if (this.props.comment)
      this.setState({
        id: this.props.comment._id,
        body: this.props.comment.body,
      });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editcomment = (e) => {
    this.props.editcomment(
      this.props.comments.user,
      this.props.comments.post,
      this.state
    );
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onSubmit={this.props.toggleModal}
          onHide={this.props.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>EDIT Your COMMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.refreshPage}>
              <label>your comment :</label>
              <input
                onChange={this.handleChange}
                defaultValue={this.state.body}
                name="body"
              />

              <button onClick={this.editcomment}>submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapsStateToProps = (state) => ({
  editedcomment: state.commentReducer.editedcomment,
  comments: state.commentReducer.comments,
});
export default connect(mapsStateToProps, { editcomment })(EditcommentModal);
