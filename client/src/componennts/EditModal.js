import React from "react";
import { Modal } from "react-bootstrap";
import { editpost } from "../redux/actions/postaction";
// import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      posType: "",
      date: "",
      link: "",
    };
  }
  componentDidMount() {
    if (this.props.onepost)
      this.setState({
        title: this.props.onepost.title,
        body: this.props.onepost.body,
        posType: this.props.onepost.posType,
        date: this.props.onepost.date,
        link: this.props.onepost.link,
      });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  EditPOST = (e) => {
    // console.log(this.props);
    this.props.editpost(this.props.onepost._id, this.state);
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    if (this.props.onepost.posType === "post") {
      return (
        <div>
          <Modal
            show={this.props.show}
            onSubmit={this.props.toggleModal}
            onHide={this.props.toggleModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>EDIT Your Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.EditPOST}>
                <label>Title:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.title}
                  name="title"
                />
                <label>body:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.body}
                  name="body"
                />
                <label>postType:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.posType}
                  name="postType"
                />
                <label>date:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.image}
                  name="date"
                />

                <button
                  type="submit"
                  onClick={(this.EditPOST, this.refreshPage)}
                >
                  submit
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Modal
            show={this.props.show}
            onSubmit={this.props.toggleModal}
            onHide={this.props.toggleModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>EDIT Your IDEA</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.EditPOST}>
                <label>Title of the idea:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.title}
                  name="title"
                />
                <label>description of the idea :</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.body}
                  name="body"
                />
                <label>Link to vidéo:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.link}
                  name="link"
                />
                <label>date:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.image}
                  name="date"
                />

                <button
                  type="submit"
                  onClick={(this.EditPOST, this.refreshPage)}
                >
                  submit
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}
const mapsStateToProps = (state) => ({
  editedpost: state.postReducer.editedpost,
  // onepost: state.postReducer.onepost,
});
export default connect(mapsStateToProps, { editpost })(EditModal);
