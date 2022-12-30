/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "reactstrap";
// import Quantity from "../component/Quantity"
import { QuantityPicker } from "react-qty-picker";
import { Link, useNavigate } from "react-router-dom/dist";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Payment.css";
import Header from "../component/Header";
import { Button, Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Search ,addPayment} from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Payment() {
  const url = "/book-ticket";
  const [show, setShow] = useState(false);
  const addBookTicket = useSelector((state) => state.film.data);
  const dispatch = useDispatch();
  const [List, setList] = useState([]);
  const [Cart, setCart] = useState();
  const [Name, setName] = useState()
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
  console.log(addBookTicket);
  useEffect(() => {
    Search(addBookTicket?.[2].tenfilm)
      .then((data) => {
        setCart(data);
      })
  }, [addBookTicket?.[2].tenfilm])
function add(){
  addPayment(addBookTicket?.[4].ghe,
    addBookTicket?.[3].loaive,
    addBookTicket?.[3].loaicombo,
    addBookTicket?.[2].rap,
    addBookTicket?.[2].tenfilm,
    addBookTicket?.[2].time,
    addBookTicket?.[3].tongtien,
    Auth.email,Name
    )
}


  return (
    <>
      <div>
        <Header />
        <Alert show={show} variant="success">
          <Alert.Heading>
            Thanh toán đang được sử lí vui lòng đợi ít phút (ᵔ.ᵔ)
          </Alert.Heading>
          <p>Tên bộ phim: Red</p>
          <p>địa chí rạp: 13/21 đường 12 quận thủ đức</p>
          <p>Giờ chiếu: 8:20 ngày chiếu: 12/11/2022</p>
          <p>Có thắc mắc vui lòng liên hệ đường dây nóng :093000567</p>
        </Alert>
      </div>

      {/* chon */}
      <div className="row  text-center">
        <div className="col-lg-9 ">
          {/* chon */}

          <h3 className="text-uppercase text-start text-white p-3 ">Thanh toán</h3>

          <div className="firsttable mx-3">
            <table className="table text-start table-striped table-light ">
              <tbody>
                {/* phần tử  */}

                <div className="row">
                  <div className="col-75">
                    <div className="container">
                      <form action="/action_page.php">
                        <div className="row">
                          <div className="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname">
                              <i className="fa fa-user"></i> Full Name
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="John M. Doe"
                              onChange={(e) => setName(e.target.value)}
                            />
                           
                          </div>

                          <div className="col-25">
                            <h3>Payment</h3>
                            <Image
                              style={{
                                display: "flex",
                                width: 250,
                              
                              }}
                              src={require("../assets/Payment.jpg")}
                            />
                          </div>
                        </div>

                        <label>
                          Lưu ý kiểm tra thông tin Trước khi Thực hiện thanh
                          toán với cú pháp :
                         
                        </label>
                        <label>
                        [Tên]+[Tên phim]+[email]
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
                {/* end */}

                {/* end */}
              </tbody>
            </table>
          </div>
          {/* end */}
        </div>
        {/* end */}
        {/* cart */}
        <div className="col-3">
            <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src={Cart?.[0].hinhanh} />
              <Card.Body>
                <Card.Title> {Cart?.[0].tenphim} </Card.Title>
                <Card.Text>{Cart?.[0].mota}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {" "}
                  <span className="text-start text-uppercase fs-5 text-white bg-danger fw-bold me-2">
                    c13
                  </span>{" "}
                  <span className="text-danger">
                    (*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-start fw-bold pe-2">Rạp :</span>
                  <span> {addBookTicket?.[2].rap}</span>
                  <span className="text-uppercase ps-2 ">|rạp 2</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-start fw-bold pe-2">Xuất Chiếu :</span>
                  <span> {addBookTicket?.[2].time}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-start fw-bold pe-2">Ghế :</span>
                  <span>{addBookTicket?.[4].ghe}</span>
                  <span></span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-start py-2 fs-3">Tổng:</span>
                  <span className="text-end text-danger py-1 fs-5 px-1 ">
                    {" "}
                    {addBookTicket?.[3].tongtien} VND{" "}
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link
                  to={"/"}
                  className="add btn btn-danger text-white text-uppercase"
                  style={{ margin: 10 }}
                  onClick={() => {
                  
                  }}
                >
                  Trở lại
                </Link>
           
                  <Link
                  
                    onClick={() => {
                      add()
                      alert('Đơn đang được sử lí', 'đơn đang được sử lí', [{ text: 'OK' }])
                    }}
                    className="add btn btn-danger text-white text-uppercase"
                    style={{ margin: 10 }}
                  >
                    Tiếp tục
                  </Link>
                
              </Card.Body>
            </Card>
          </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
