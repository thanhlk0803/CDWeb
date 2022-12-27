import React, { useEffect, useState } from "react";
import "../css/flim.css";
import { GetListFilm } from "../config";
import { Link } from "react-router-dom";

export default function Flim() {
  const [ListUser, setList] = useState([]);
  useEffect(() => {
    GetListFilm()
      .then((data) => {
        setList(data);
      
      })
      .catch((err) => console.log("error =>", err));
  }, []);
  return (
    <>
      <section className="flim">
        <button className="btn btn-light" style={{ margin: 12 }}>
          Phim Đang Chiếu
        </button>

        <div className="container">
          <div className="row">
            {ListUser.map((course, imdex) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md6 col-sm-12 flim-item"
                  key={imdex}
                >
               <Link style={{
                textDecoration:"none",
                color:"black"
               }} to={"/detail"+course.tenphim}  >
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
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
