import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { addUser,GetAllUser, GetAllUserDetail} from "../config/index";


// modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Đăng nhập</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* form login */}
        <FormLogin />
        {/* end */}
      </Modal.Body>
    </Modal>
  );
}
// bên trong modal
export default function ModalLogin() {
  const [modalShow, setModalShow] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [Login, setLogin] = useState(false);
  return (
    <>
      {Login === false ? (
        <Button
          style={{
            flexDirection: "row",
            background: "#fff",
            color: "black",
          }}
          onClick={() => setModalShow(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
          >
            variant="outline-success"
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Đăng nhập
        </Button>
      ) : (
        <Button
          style={{
            flexDirection: "row",
            background: "#fff",
            color: "black",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Thanh Trần /Logout
        </Button>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
function FormLogin() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [name, setname] = useState();
  const [UserName, setUserName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [password2, setpassword2] = useState();
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const [ListUser, setList] = useState([]);
  useEffect(() => {
    GetAllUserDetail(UserName)
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log("error =>", err));
  }, [UserName]);
  console.log(ListUser[0]);
  return (
    <div>
      <MDBContainer>
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <Button className="mb-4 w-100">Sign in</Button>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setname(e.target.value)}
              label="Name"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setUserName(e.target.value)}
              label="Username"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setemail(e.target.value)}
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setpassword(e.target.value)}
              label="Password"
              id="form1"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setpassword2(e.target.value)}
              label="RePassword"
              id="form1"
              type="password"
            />
           <Button
            onClick={() => {
                if (password === password2&&UserName ) {
                  addUser(name, UserName, email, password);
                  alert('Đăng kí thành công', 'Thông báo không để trống trường name', [{ text: 'OK' }])
                }
                else if(name === null)  {
                alert('Thông báo không để trống trường name', 'Thông báo không để trống trường name', [{ text: 'OK' }])
                }
                else if(UserName === undefined) {
                alert('Thông báo không để trống trường Username','Thông báo không để trống trường name',  [{ text: 'OK' }])
                }
                else if(email === undefined){
                alert('Thông báo không để trống trường email', 'Thông báo không để trống trường name', [{ text: 'OK' }])
                }
              }}
              className="mb-4"
             >Sign Up</Button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
}
