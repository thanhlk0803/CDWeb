/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import ModalLogin from "./ModalLogin";

function Header() {
  const [Login, setLogin] = useState(false);

  return (
    <Navbar fluid expand="sm" bg="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width="130"
            height="60"
            src={require("../assets/galaxy-logo-mobile.png")}
            data-src="website/images/galaxy-logo.png"
            alt="Galaxy Cinema"
            className="lazy hidden-xs hidden-sm loaded"
            data-was-processed="true"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                style={{ width: "100px", justifyContent: "center" }}
              />
              <Button variant="outline-success">
                <Icon.Search />{" "}
              </Button>
            </Form>
          </Nav>
          <div >
          <ModalLogin/>
        
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
