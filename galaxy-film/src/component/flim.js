import React, { useEffect, useState } from "react";
import { data } from "../data";
import "../css/flim.css";
import { GetListFilm } from "../config";

export default function Flim() {
  const [ListUser, setList] = useState([]);
  useEffect(() => {
    GetListFilm()
      .then((data) => {
        setList(data);
      
      })
      .catch((err) => console.log("error =>", err));
  }, []);
console.log(ListUser);
  return (
    <>
      <section className="flim">
        <button className="btn btn-light" style={{ margin: 12 }}>
          Phim Đang Chiếu
        </button>

        {/* <div className="container">
          <div className="row">
            {data.map((course, imdex) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md6 col-sm-12 flim-item"
                  key={imdex}
                >
                  <div className="card">
                    <img
                      src={course.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            {ListUser.map((course, imdex) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md6 col-sm-12 flim-item"
                  key={imdex}
                >
                  <div className="card">
                    <img
                      src={course.hinhanh}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.tenphim}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
