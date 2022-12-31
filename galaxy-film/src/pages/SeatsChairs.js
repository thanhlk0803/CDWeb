/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import SeatChairs from "../component/SeatChairs";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../component/Header";
import Button from "react-bootstrap/Button";
import Footer from "../component/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SeatPicker from "react-seat-picker";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../config";
import { addPayment, deleteFilm } from "../component/redux/reducers/filmSlice";

export default function SeatsChairs() {
  const url = "/book-ticket";
  const [selected, setSelected] = useState([]);
  const [time, setTime] = useState(0);

  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 24, number: "A5" },
      
      { id: 44, number: "A6" },
      { id: 54, number: "A7" },
      null,
      { id: 5, number: "A8" },
      { id: 6, number: "A9" },
      { id: 7, number: "A10" },
      { id: 8, number: "A11" },
      { id: 9, number: "A12", isReserved: true },
      { id: 10, number: "A13", isReserved: true },

    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      { id: 84, number: "B6" },
      { id: 34, number: "B7" },
      { id: 94, number: "B8" },
      null,
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" },
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      { id: 20, number: "C6" },
      { id: 99, number: "C7" },
      { id: 98, number: "C8" },
      null,
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
      null,
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      { id: 84, number: "D6" },
      { id: 34, number: "D7" },
      { id: 94, number: "D8" },
      null,
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" },
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      { id: 34, number: "E7" },
      { id: 94, number: "E8" },
      null,
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" },
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      { id: 84, number: "F6" },
      { id: 34, number: "F7" },
      { id: 94, number: "F8" },
      null,
      { id: 15, number: "F9" },
      { id: 16, number: "F10" },
      { id: 17, number: "F11" },
      { id: 18, number: "F12" },
      { id: 19, number: "F13" },
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      { id: 94, number: "G8" },
      null,
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G13" },
    ],
  ];

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };
  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  const addBookTicket = useSelector((state) => state.film.data);
  const dispatch = useDispatch();
  const [List, setList] = useState([]);
  const [Cart, setCart] = useState();
  console.log(addBookTicket);

  useEffect(() => {
    Search(addBookTicket?.[2].tenfilm)
      .then((data) => {
        setCart(data);
      })
  }, [addBookTicket?.[2].tenfilm])
  

  function addCinemas() {
    List.push({
      ghe:selected,

    })

  }






  
  return (
    <>
      <Header></Header>
      <div className="main">
        {/* chon */}
        <div className="row g-0 text-center">
          <div className="col-sm-9 ">
            {/* chon */}
            <div className="text-left col7-container ">
              <h3 className="text-uppercase text-start text-white p-3 ">
                Chọn Ghế :
              </h3>
              {/* chon ghế */}
              <div className="seats">
                <SeatPicker
                  addSeatCallback={addSeatCallback}
                  removeSeatCallback={removeSeatCallback}
                  rows={rows}
                  alpha
                  maxReservableSeats={addBookTicket?.[3].count}
                  visible
                />
              </div>
              );
              {/* end chọn */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="g" style={{ margin: 30 }}>
                  <div className="seat seat--reserved seat--north"></div>
                  <b style={{ margin: 5 }}>Ghé đã được đặt</b>
                </div>
                <div className="g" style={{ margin: 30 }}>
                  <div className="seat seat--enabled seat--north"></div>
                  <b style={{ margin: 5 }}>Ghé Còn Trống</b>
                </div>
                <div className="g" style={{ margin: 30 }}>
                  <div className="seat seat--reserved abc"></div>
                  <b style={{ margin: 5 }}>Ghé đang chọn</b>
                </div>
              </div>
              {/* end */}
              {/* chon ve */}
              {/* end */}
            </div>
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
                  <span>{selected}</span>
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
                    dispatch(deleteFilm);
                  }}
                >
                  Trở lại
                </Link>
           
                  <Link
                    to={url + "/seatschair/paymentPOhXJfFP9RO"}
                    onClick={() => {
                      addCinemas();
                      dispatch(addPayment(List));
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
      </div>
      <Footer />
    </>
  );
}
