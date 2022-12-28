/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { Col } from "reactstrap";
import { QuantityPicker } from "react-qty-picker";
import {
  createSearchParams,
  generatePath,
  Link,
  useNavigate,
} from "react-router-dom/dist";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(":url?:queryString", {
      url,
      queryString: params,
    });
    navigate(path);
  };
};
export default function ComboFood() {
  const url = "/book-ticket";
  ///////////////////////////////////////Quantity ticket//////////////////////////////////////
  //người lớn
  const [quantityadult, setquantityadult] = useState(0);
  //vé  thành viên
  const [quantityMember, setquantityMember] = useState(0);
  //vé đôi
  const [quantityDouble, setquantityDouble] = useState(0);
  //vé đôi thành viên
  const [quantityDoubleMember, setquantityDoubleMember] = useState(0);
  ///////////////////////////////quantity Food /////////////////////////////////////
  const [quantityCombo1, setquantityCombo1] = useState(0);
  //Combo2
  const [quantityCombo2, setquantityCombo2] = useState(0);
  //Combo3
  const [quantityCombo3, setquantityCombo3] = useState(0);
  //Combo 4
  const [quantityCombo4, setquantityCombo4] = useState(0);

  // total Combo vé
  const [totalAdult, setTotalAdult] = useState(0);
  const [totalMember, setTotalMember] = useState(0);
  const [totalDouble, setTotalDouble] = useState(0);
  const [totalDoubleMember, setTotalDoubleMember] = useState(0);
  // total ComboFood
  const [totalC1, setTotalC1] = useState(0);
  const [totalC2, setTotalC2] = useState(0);
  const [totalC3, setTotalC3] = useState(0);
  const [totalC4, setTotalC4] = useState(0);
  // tổng combo ticket
  const [TotalTicket, setTotalTicket] = useState(0);
  // tổng combo food
  const [TotalFood, setTotalFood] = useState(0);
  // tổng cart

  const [TotalCart, setTotalCart] = useState(0);

  console.log("người lớn:" + quantityadult);
  console.log("người thành viên : " + quantityMember);
  console.log("vé đôi : " + quantityDouble);
  console.log("vé đôi thành  viên : " + quantityDoubleMember);
  console.log("Combo 1 : " + quantityCombo1);
  console.log("Combo 2: " + quantityCombo2);
  console.log("Combo 3 : " + quantityCombo3);
  console.log("Combo 4 : " + quantityCombo4);
  // total quantity adult
  useEffect(() => {
   
    const totalAdult = setTotalAdult(quantityadult * 100000);
  }
 
  
  , [quantityadult]);
  // total quantity Member
  useEffect(() => {
    const totalMember = setTotalMember(quantityMember * 80000);
  }, [quantityMember]);
  // total quantity Double Member
  useEffect(() => {
    const totalDoubleMember = setTotalDoubleMember(
      quantityDoubleMember * 200000
    );
  }, [quantityDoubleMember]);
  useEffect(() => {
    const totalDouble = setTotalDouble(quantityDouble * 180000);
  }, [quantityDouble]);
  // total food
  useEffect(() => {
    const totalC1 = setTotalC1(quantityCombo1 * 80000);
  }, [quantityCombo1]);
  useEffect(() => {
    const totalC2 = setTotalC2(quantityCombo2 * 60000);
  }, [quantityCombo2]);
  useEffect(() => {
    const totalC3 = setTotalC3(quantityCombo3 * 40000);
  }, [quantityCombo3]);
  useEffect(() => {
    const totalC4 = setTotalC4(quantityCombo4 * 20000);
  }, [quantityCombo4]);
  useEffect(() => {
    const Total = setTotalTicket(
      totalAdult + totalMember + totalDouble + totalDoubleMember
    );
  }, [totalAdult, totalMember, totalDouble, totalDoubleMember]);
  useEffect(() => {
    const Total = setTotalFood(totalC1 + totalC2 + totalC3 + totalC4);
  }, [totalC1, totalC2, totalC3, totalC4]);
  useEffect(() => {
    const Total = setTotalCart(TotalTicket + TotalFood);
  }, [TotalFood, TotalTicket]);
  const IDORDER = "";
  // navigate
  const useNavigateParams = () => {
    const navigate = useNavigate();

    return (pathname, params) => {
      console.log(pathname);
      const path = {
        pathname,
        id: IDORDER,
      };
      navigate(path);
    };
  };

  return (
    <>
      <div className="main">
        {/* chon */}
        <div className="row g-0 text-center">
          <div className="col-sm-9 ">
            {/* chon */}
            <div className=" col7-container ">
              <h3 className="text-uppercase text-start text-white p-3 ">
                Chọn vé/Thức Ăn 
              </h3>
              {/* chon combo */}
              <div className="firsttable mx-3">
                <table className="table text-start table-striped table-light ">
                  <thead>
                    <tr className="table-dark">
                      <th scope="col" colSpan={3}>
                        Loại vé
                      </th>
                      <th scope="col" className="text-center">
                        Số Lượng
                      </th>
                      <th scope="col" className="text-end">
                        Giá(VND)
                      </th>
                      <th scope="col" className="text-end">
                        Tổng(VND)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* phần tử  */}
                    {/* 1 */}
                    <tr>
                      <td colSpan={3}>
                        <b>Vé người lớn</b>
                        <Col>Vé 2d</Col>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityadult(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>100.000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalAdult}</span>
                      </td>
                    </tr>
                    {/* end */}
                    {/* 2 */}
                    <tr>
                      <td colSpan={3}>
                        <b>Vé 2D thành viên</b>
                        <Col>Vé 2D-Chỉ áp dụng khách hàng thành viên</Col>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityMember(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>80.000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalMember}</span>
                      </td>
                    </tr>
                    {/*3  */}
                    <tr>
                      <td colSpan={3}>
                        <b>Vé Đôi</b>
                        <Col>Vé Vé ghế đôi (bao gồm 2 vé)</Col>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityDouble(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>200.000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalDouble}</span>
                      </td>
                    </tr>
                    {/* 4 */}
                    <tr>
                      <td colSpan={3}>
                        <b>Vé Đôi Thành viên</b>
                        <Col>
                          Vé Vé ghế đôi (bao gồm 2 vé) áp dụng cho thành viên
                        </Col>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityDoubleMember(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>180,000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalDoubleMember}</span>
                      </td>
                    </tr>

                    {/* tổng */}
                    <tr>
                      <td colSpan={5} className="text-danger">
                        <span>Tổng</span>
                      </td>
                      <td className="text-end text-danger">
                        <span>{TotalTicket}</span>
                      </td>
                    </tr>
                    {/* end */}
                  </tbody>
                </table>
              </div>
              {/* end */}
              {/* chon ve */}
              <div className=" mx-3">
                <table className="table text-start table-striped table-light ">
                  <thead>
                    <tr className="table-dark">
                      <th scope="col" colSpan={3}>
                        Loại Đồ ăn
                      </th>
                      <th scope="col" className="text-center">
                        Số Lượng
                      </th>
                      <th scope="col" className="text-end">
                        Giá(VND)
                      </th>
                      <th scope="col" className="text-end">
                        Tổng(VND)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div className="wrapper3">
                          <div>
                            <span className="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              className="img-fluid img-table"
                              src={require("../assets/combo1.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span className="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI)+1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                           
                              setquantityCombo1(value);
                           
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>80,000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalC1}</span>
                      </td>
                    </tr>
                    {/* 2 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div className="wrapper3">
                          <div>
                            <span className="text-start crop-long-texts fw-bold text-dark">
                              iCombo 2 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              className="img-fluid img-table"
                              src={require("../assets/combo2.png")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span className="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityCombo2(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>60,000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalC2}</span>
                      </td>
                    </tr>
                    {/* 3 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div className="wrapper3">
                          <div>
                            <span className="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              className="img-fluid img-table"
                              src={require("../assets/combo3.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span className="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC NGỌT 32 Oz{" "}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityCombo3(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>40,000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalC3}</span>
                      </td>
                    </tr>
                    {/* 4 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div className="wrapper3">
                          <div>
                            <span className="text-start crop-long-texts fw-bold text-dark">
                              iCombo 2 Big{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              className="img-fluid img-table"
                              src={require("../assets/combo4.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span className="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 2 NƯỚC NGỌT 32 OZ
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" className="text-center crop-long-texts">
                        <QuantityPicker
                          min={0}
                          onChange={(value) => {
                            // here value is the final update value of the component
                            setquantityCombo4(value);
                          }}
                        />
                      </td>
                      <td className="text-end">
                        <span>20,000</span>
                      </td>
                      <td className="text-end">
                        <span>{totalC4}</span>
                      </td>
                    </tr>
                  </tbody>
                  <tr>
                    <td colSpan={5} className="text-danger">
                      <span>Tổng</span>
                    </td>
                    <td className="text-end text-danger">
                      <span>{TotalFood}</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          {/* end */}
          {/* cart */}
          <div className="col-3">
            <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src={require("../assets/a1.jpg")} />
              <Card.Body>
                <Card.Title> iCombo 1 Big Extra </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
                  <span> Galaxy Trung Chánh</span>
                  <span className="text-uppercase ps-2 ">|rạp 2</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-start fw-bold pe-2">Xuất Chiếu :</span>
                  <span> 15:15</span>
                  <span className="text-uppercase ps-2 ">
                    |Thứ 3,01/11/2022
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-start fw-bold pe-2">Combo :</span>
                  <span> </span>
                  <span></span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-start fw-bold pe-2">Ghế :</span>
                  <span></span>
                  <span></span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-start py-2 fs-3">Tổng:</span>
                  <span className="text-end text-danger py-1 fs-5 px-1 ">
                    {" "}
                    {TotalCart} VND{" "}
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link
                  to={url + "/seatschair"}
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
    </>
  );
}
