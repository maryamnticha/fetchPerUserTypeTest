import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addpost } from "../redux/actions/postaction";
class AddPost extends Component {
  state = {
    title: "",
    body: "",
    postType: "",
    date: "",
    link: "",
  };
  componentDidMount() {
    if (this.props.profile.userType === "entrepreneur")
      this.setState({
        postType: "post",
      });
    else
      this.setState({
        postType: "idea",
      });
  }
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  AddPost = (e) => {
    e.preventDefault();
    this.props.addpost(this.props.match.params.id, this.state);
  };
  render() {
    const { profile } = this.props;
    const { userType } = profile;
    if (this.props.profile.userType === "entrepreneur") {
      return (
        <div id="login">
          <h3 className="text-center text-white pt-5">add form</h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="add-form"
                    className="form"
                    action=""
                    method="post"
                    // onSubmit={this.AddPost}
                  >
                    <h3 className="text-center text-info">add post</h3>
                    <div className="form-group">
                      <label htmlFor="title" className="text-info">
                        title :
                      </label>

                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="body" className="text-info">
                        body :
                      </label>
                      <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="body"
                        placeholder="article"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date" className="text-info">
                        date :
                      </label>
                      <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="date"
                        placeholder="date"
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="row mt-2 justify-content-md-center">
                      <button onClick={this.AddPost}>ADD</button>
                      <button type="reset" className="btn btn-outline-danger">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="login">
          <h3 className="text-center text-white pt-5">ADD Your Idea</h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="add-form"
                    className="form"
                    action=""
                    method="post"
                    // onSubmit={this.AddPost}
                  >
                    <h3 className="text-center text-info">add idea</h3>
                    <div className="form-group">
                      <label htmlFor="title" className="text-info">
                        Idea title :
                      </label>

                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="body" className="text-info">
                        description of the idea :
                      </label>
                      <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="body"
                        placeholder="article"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="link" className="text-info">
                        Link to short video describing the idea :
                      </label>
                      <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="link"
                        placeholder="link to vidéeo"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date" className="text-info">
                        date :
                      </label>
                      <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="date"
                        placeholder="date"
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="row mt-2 justify-content-md-center">
                      <button onClick={this.AddPost}>ADD idea</button>
                      <button type="reset" className="btn btn-outline-danger">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapsStateToProps = (state) => ({
  profile: state.authReducer.profile,
});

export default connect(mapsStateToProps, { addpost })(AddPost);
