/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "reactstrap";
// import Quantity from "../component/Quantity"
import { QuantityPicker } from "react-qty-picker";
import { useNavigate } from "react-router-dom/dist";
import "../css/Payment.css"
import Header from "../component/Header";
export default function Payment() {
  return (
    <>
     <div>
        <Header></Header>
      </div>
      <div class="main">
        {/* chon */}
        <div class="row g-0 text-center">
          <div class="col-sm-9 ">
            {/* chon */}
            <div class="text-left col7-container ">
              <h3 class="text-uppercase text-start text-white p-3 ">
                Thanh toán
              </h3>
              {/* chon combo */}
              <div class="firsttable mx-3">
                <table class="table text-start table-striped table-light ">
                 
                  <tbody>
                    {/* phần tử  */}
                    {/* 1 */}
                    <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn"/>
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
              <div class="red-text py-4">
                        <span class="text-start text-uppercase fs-5 text-white bg-danger fw-bold me-2">c13</span>
                        <span class="text-danger"> (*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên</span>
                    </div>
                    <div class="ulb">
                        <span class="text-start fw-bold pe-2" >Rạp :</span>
                        <span> Galaxy Trung Chánh</span>
                        <span class="text-uppercase ps-2 ">|rạp 2</span>
                    </div>
                    <div class="ulb">
                        <span class="text-start fw-bold pe-2" >Xuất Chiếu :</span>
                        <span> 15:15</span>
                        <span class="text-uppercase ps-2 ">|Thứ 3,01/11/2022</span>
                    </div>
                    <div class="ulb">
                        <span class="text-start fw-bold pe-2" >Combo :</span>
                        <span> </span>
                        <span></span>
                    </div>
                    <div class="ulb">
                        <span class="text-start fw-bold pe-2" >Ghế :</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="ulb">
                        <span class="text-start py-2 fs-2">Tổng:</span>
                        <span class="text-end text-danger py-1 fs-2 px-3 "> 0VND </span>
                        <span></span>
                    </div>
                   
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
