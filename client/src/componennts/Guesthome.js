import React from "react";
// import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";

const Guesthome = ({ isLoading }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">This is the Guesthome</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="Login" type="submit" name="submit">
          <a className="Login" href="/register">
            {" "}
            Register
          </a>
        </Button>
        <Button className="Login" variant="success">
          <a className="Login" href="/login">
            Login
          </a>
        </Button>
      </Form>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
});
export default connect(mapStateToProps)(Guesthome);
