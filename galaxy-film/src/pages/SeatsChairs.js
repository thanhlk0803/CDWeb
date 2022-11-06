/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SeatChairs from "../component/SeatChairs";
import { Col } from "reactstrap";
import { QuantityPicker } from "react-qty-picker";
import Header from "../component/Header";
export default function SeatsChairs() {
  return (
    <>
    <Header></Header>
      <div class="main">
        {/* chon */}
        <div class="row g-0 text-center">
          <div class="col-sm-9 ">
            {/* chon */}
            <div class="text-left col7-container ">
              <h3 class="text-uppercase text-start text-white p-3 ">
                Chọn Ghế :
              </h3>
              {/* chon combo */}
              <SeatChairs />
              <div style={{display:"flex",flexDirection:"row"}}>
                <div class="g" style={{ margin: 30 }}>
                  <div class="seat seat--reserved seat--north"></div>
                  <b style={{ margin: 5 }} >Ghé đã được đặt</b>
                </div>
                <div class="g" style={{ margin: 30 }}>
                <div class="seat seat--enabled seat--north"></div>
                  <b  style={{ margin: 5 }}>Ghé Còn Trống</b>
                </div>
                <div class="g" style={{ margin: 30 }}>
                <div class="seat seat--reserved a" ></div>
                  <b  style={{ margin: 5 }}>Ghé đang chọn</b>
                </div>
              </div>
              {/* end */}
              {/* chon ve */}

              {/* end */}
            </div>
          </div>
          {/* end */}
          {/* cart */}
          <div class="col-3">
            <div class="col3-container">
              <img
                class="img-fluid img-table"
                src={require("../assets/a1.jpg")}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  class="text-start crop-long-texts fw-bold text-dark text-uppercase mt-2"
                  style={{ flex: 1 }}
                >
                  iCombo 1 Big Extra{" "}
                </span>
                <span
                  class="text-start text-secondary text-break text-uppercase fw-bold  "
                  style={{ flex: 1 }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                </span>
              </div>
              <div class="red-text py-3">
                <span class="text-start text-uppercase fs-5 text-white bg-danger fw-bold me-2">
                  c13
                </span>
                <span class="text-danger">
                  {" "}
                  (*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên
                </span>
              </div>
              <div class="ulb">
                <span class="text-start fw-bold pe-2">Rạp :</span>
                <span> Galaxy Trung Chánh</span>
                <span class="text-uppercase ps-2 ">|rạp 2</span>
              </div>
              <div class="ulb">
                <span class="text-start fw-bold pe-2">Xuất Chiếu :</span>
                <span> 15:15</span>
                <span class="text-uppercase ps-2 ">|Thứ 3,01/11/2022</span>
              </div>
              <div class="ulb">
                <span class="text-start fw-bold pe-2">Combo :</span>
                <span> </span>
                <span></span>
              </div>
              <div class="ulb">
                <span class="text-start fw-bold pe-2">Ghế :</span>
                <span></span>
                <span></span>
              </div>
              <div class="total my-3">
                <span class="text-start py-2 fs-3">Tổng:</span>
                <span class="text-end text-danger py-1 fs-2 px-3 "> 0VND </span>
              </div>
              <button
                // onClick={() => navigate(`/book-ticket/seatsChairs`)}
                class="add btn btn-danger text-white text-uppercase"
              >
                tiếp tục →{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
