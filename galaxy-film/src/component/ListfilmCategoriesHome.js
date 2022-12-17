import Table from "react-bootstrap/Table";
import { GetListFilm } from "../config";
import React, { useEffect, useState } from "react";
import "../css/flim.css";

export default function SmallExample() {
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
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th bg="dark">Phim đang chiếu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
     
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
        </tr>
      </tbody>
    </Table>
    
    </>
  );
}
