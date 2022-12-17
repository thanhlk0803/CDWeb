import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< HEAD
import { useState } from "react";
=======
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
>>>>>>> main
import * as Icon from "react-bootstrap-icons";
import ModalLogin from "./ModalLogin";
import CategoryHeader from "./CategoryHeader";
import { useNavigate } from "react-router-dom";
function Header() {
    const [Login, setLogin] = useState(false);
// ham log out
// function useLogoutTimer() {
//   const userIsInactive = useFakeInactiveUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userIsInactive) {
//       // eslint-disable-next-line no-undef
//       fake.logout();
//       navigate("/session-timed-out");
//     }
//   }, [userIsInactive]);
// }
  return (
    <>
    <Navbar fluid expand="sm" bg="dark">
      <Container fluid>
        <Navbar.Brand href="/">
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
         
            navbarScroll
          >
             <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                style={{margin:12}}
              />
              <Button variant="outline-success" style={{margin:12}}>
                <Icon.Search size={10}/>
              </Button>
            </Form>
          </Nav>
        
          <div >
          <ModalLogin/>
        
          </div>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <CategoryHeader/>
    </>
  );
}

export default Header;