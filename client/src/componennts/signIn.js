import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/actions/action";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    const { isLoading, errors } = this.props;
    // console.log(localStorage.getItem("token"));
    return localStorage.getItem("token") ? (
      <Redirect to="/home" />
    ) : isLoading ? (
      <div className="spinner-border justify-content-md-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  action=""
                  method="post"
                  onSubmit={this.login}
                >
                  <h3 className="text-center text-info">login</h3>
                  {errors ? (
                    <code>
                      <code>{JSON.stringify(errors)}</code>
                    </code>
                  ) : (
                    <p>Welcome</p>
                  )}
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email :
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="email"
                      onChange={this.changeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password :
                    </label>
                    <br></br>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div>
                    <small id="emailHelp" className="form-text text-muted">
                      You don't have an account yet ?
                    </small>
                    <a href="/register">Register here</a>
                  </div>
                  <div className="row mt-2 justify-content-md-center">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      onClick={this.login}
                      value="submit"
                    >
                      Submit
                    </button>
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
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  errors: state.authReducer.errors,
  userCredential: state.authReducer.userCredential,
});
export default connect(mapStateToProps, { login })(SignIn);
