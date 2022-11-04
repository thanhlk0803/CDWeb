import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
function HeaderTab() {
  return (
    <>
      {/* // login */}

      <Navbar style={{ background:"#08fbff"}} class="navbar" >
        <div style={{ paddingLeft: 300 }}>
          <img
            width="130"
            height="70"
            src={require("../assets/galaxy-logo-mobile.png")}
            data-src="website/images/galaxy-logo.png"
            alt="Galaxy Cinema"
            class="lazy hidden-xs hidden-sm loaded"
            data-was-processed="true"
          ></img>
        </div>
        <Container style={{ paddingLeft: 200 }}>
          <div>
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon" style={{ background:"#08fbff"}}>
                <Button variant="outline-success" >
                  <Icon.Search  />
                </Button>
              </span>
            </div>
          </div>
          <div style={{ marginRight: 150 , flexDirection: "row" }}>
          <Button style={{ flexDirection: "row",background:"#fff" ,color:"black" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
           </svg>
           Đăng nhập
           
          </Button>
   
        </div>
        </Container>
        {/* login */}
       
      </Navbar>
      {/* // category */}
      <Navbar class="navbar navbar-dark bg-dark" bg="dark" variant="dark">
        <Container>
        <div style={{ paddingLeft: 200 }}></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            
      <Button  style={{ background:"black" ,color:"#fff" }} >Mua Vé</Button>
      <Button style={{ background:"black" ,color:"#fff" }} >2</Button>

      <DropdownButton  background="red" title="Dropdown" >
        <Dropdown.Item  eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
   
            </Nav>
        
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderTab;
