/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/flim.css";
import "../css/Payment.css";
import { Image } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Detail, GetDetail } from "../config";
import BookTicketDetail from "../component/BookTicketDetail";

export default function DetailPage() {
  const { id } = useParams();
  const [List, setList] = useState();
  useEffect(() => {
    GetDetail(id)
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log("error =>", err));
  }, [id]);
  console.log(List?.[0].hinhanh);
  return (
    <>
      <Header />

      <div className="firsttable mx-3">
        <table className="table text-start table-striped table-light ">
          <tbody>
            {/* phần tử  */}

            <div className="row">
              <div className="col-75">
                <div className="container">
                  <form action="/action_page.php">
                    <div className="row">
                      <div className="col-3">
                        <img
                          src={List?.[0].hinhanh}
                        />
                      </div>

                      <div className="col-2">
                        <h3>{List?.[0].tenphim}</h3>
                        {List?.[0].tenviet != null ? (
                        <label>Tên Việt : {List?.[0].tenviet}</label>
                        ):null}
                        {List?.[0].daodien != null ? (
                        <label>Đạo Diễn : {List?.[0].daodien}</label>
                        ):null}
                        {List?.[0].quocgia != null ? (
                        <label>Quốc gia : {List?.[0].quocgia}</label>
                        ):null}
                        {List?.[0].nsx != null ? (
                        <label>Nhà Sản xuất: {List?.[0].nsx}</label>
                        ):null}
                        {List?.[0].dienvien != null ? (
                        <label>Diễn viên : {List?.[0].dienvien}</label>
                        ):null}
                        {List?.[0].theloai != null ? (
                        <label>Thể loại : {List?.[0].theloai}</label>
                        ):null}
                        {List?.[0].ngaykhoichieu != null ? (
                        <label>Ngày khởi chiếu : {List?.[0].ngaykhoichieu}</label>
                        ): null}
                       
                      </div>
                      <div className="col-3">
                    <BookTicketDetail/>

                      </div>
                    <div>
                    </div>
                    </div>
                    <div>
                      <h2> Nội dung phim</h2>
                      <hr></hr>
                      <label>
                        {List?.[0].mota}
                      </label>
                    </div>
                  
                  </form>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
