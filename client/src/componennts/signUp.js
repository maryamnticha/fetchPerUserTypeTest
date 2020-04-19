import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../redux/actions/action";
class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    userType: "",
  };
  changeHandler = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  register = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    const { isLoading, user, errors } = this.props;
    return isLoading ? (
      <div className="spinner-border justify-content-md-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : user ? (
      <Redirect to="/login" />
    ) : (
      <div id="login">
        <h3 className="text-center text-white pt-5">sign'up form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            {" "}
            <div id="login-column" className="col-md-6">
              <div id="login-box">
                <form
                  id="login-form"
                  className="form"
                  action=""
                  method="POST"
                  onSubmit={this.register}
                >
                  <h3 className="text-center text-info">Register</h3>
                  {errors ? (
                    <div>
                      <code>
                        {JSON.stringify(errors[0])} <br />
                      </code>
                    </div>
                  ) : (
                    <Redirect to="/home" />
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="text-info">
                      Email :
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="email"
                      onChange={this.changeHandler}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="text-info">
                      Name :
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="name"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password :
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userType" className="text-info">
                      UserType :
                    </label>
                    <select
                      id="inputState"
                      className="form-control"
                      type="text"
                      name="userType"
                      placeholder="userType.."
                      onChange={this.changeHandler}
                    >
                      <option defaultValue>Choose...</option>
                      <option>entrepreneur</option>
                      <option>Junior</option>
                      <option>Incubator</option>
                    </select>
                  </div>
                  <div>
                    <small id="emailHelp" className="form-text text-muted">
                      You have Alread an account ?
                    </small>
                    <a href="/login">Login directly</a>
                  </div>
                  <div className="row mt-2 justify-content-md-center">
                    <button
                      className="btn btn-outline-primary"
                      onClick={this.register}
                    >
                      Register
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
const mapsStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  user: state.authReducer.user,
  errors: state.authReducer.errors,
});

export default connect(mapsStateToProps, { register })(SignUp);
