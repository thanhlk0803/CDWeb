/* eslint-disable no-unused-vars */
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
import { addUser, } from "../config/index";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, Navigate } from "react-router-dom";

// modal
function MyVerticallyCenteredModal(props) {
  const [justifyActive, setJustifyActive] = useState("tab1");
  // đăng kí
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [password2, setpassword2] = useState();
  // đăng nhập
  const [username, setusername] = useState();
  const [passwords, setpasswords] = useState();
  const [emailchange, setemailchange] = useState();

  const [Auth, setAuth] = useState([])
 
  const forgetPass = () => {
    sendPasswordResetEmail(auth, emailchange)
    .then(() => {
      alert( 
        "Gửi thành công",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
        
      )
      // setshow(false);
    })
    .catch((error) => {
      alert(
        "Gửi thất bại",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
      )
      
    });
  }
// đăng nhập
  const SignIn = () => {
    
    
    signInWithEmailAndPassword(auth,username,passwords)
    .then((userCrendential) => {
      // console.log(userCrendential);
      alert(
        "Đăng nhập thành công",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
      )
       
      //  props.setData(show);
    }).catch((error)=>{
      console.log(error);
      alert(
        "Đăng nhập thất bại",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
      )
      
    })
  
  }
  // useffect đăng nhập
  useEffect(() => {
    const listen = onAuthStateChanged(auth,(user)=>{
      if (user){
        setAuth(user);
      }else{
      setAuth(null);
      }
    });
    return () => {
      listen();
    }
   
  }, [])
  // đăng kí
  const SignUp = () => {
    createUserWithEmailAndPassword(auth,email,password)
   
    .then((userCrendential) => {
      // console.log(userCrendential);
      alert(
        "Đăng kí thành công",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
      )
    }).catch((error)=>{
      console.log(error);
      alert(
        "Đăng đăng thất bại",
        "Thông báo không để trống trường name",
        [{ text: "OK" }]
      )
    })
    
  
  }


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  // props.setData(show);

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
        {/* <FormLogin /> */}
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
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab3")}
              active={justifyActive === "tab3"}
            >
             Forgot password?
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane  show={justifyActive === "tab1"}>
            <MDBInput
              onChange={(e) => setusername(e.target.value)}
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              onChange={(e) => setpasswords(e.target.value)}
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
            </div>
            {username === "thanh126126@gmail.com" ? (
              <Link to="/adminsEslL7UCPOhXJfFP9RO6qGBwJp93">
            <Button className="mb-4 w-100"  type="submit" block="true" onClick={()=>{
              SignIn();

             
            }} 
             >Sign in </Button>
            </Link>)
            : (
              <Link to="/">
             <Button className="mb-4 w-100"  type="submit" block="true" onClick={()=>{
              SignIn();

             
            }} 
             >Sign in </Button></Link>)}
          </MDBTabsPane>
          {/* đăng kí */}
          <MDBTabsPane show={justifyActive === "tab2"}>
           
          
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
                if (password === password2) {
                  SignUp();
                  // addUser(Auth.uid,name, email, password);
                  alert(
                    "Đăng kí thành công",
                    "Thông báo không để trống trường name",
                    [{ text: "OK" }]
                  );
                }
              }}
              className="mb-4"
            >
              Sign Up
            </Button>
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab3"}>
           
          
           <MDBInput
             wrapperClass="mb-4"
             onChange={(e) => setemailchange(e.target.value)}
             label="Email"
             id="form1"
             type="email"
           />
           
           <Button
             onClick={() => {
              forgetPass();
             }}
             className="mb-4"
           >
             Submit
           </Button>
         </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
        {/* end */}
      </Modal.Body>
    </Modal>
  );
}
// bên trong modal



export default function ModalLogin() {
  const [modalShow, setModalShow] = React.useState(false);
  const [Auth, setAuth] = useState(null)
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    const listen = onAuthStateChanged(auth,(user)=>{
      if (user){
        setAuth(user);
      }else{
      setAuth(null);
      }
    });
    return () => {
      listen();
    }
   
  }, [])
  const UserSignOut = () => { 
    signOut(auth).then(() => {
    console.log("logout completed");
    }).catch(error => console.log(error))
  }
  // const setData = data => {
  //   setModalShow(data)
  // }
  return (
    <>
      {Auth === null ? (
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
        <Link to="/">
        <Button
          style={{
            flexDirection: "row",
            background: "#fff",
            color: "black",
          }}
          onClick={UserSignOut}
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
          {Auth.email} /Logout
        </Button>
        </Link>
      )}
      {/* modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // setData={setData}
      />
    </>
  );
}

