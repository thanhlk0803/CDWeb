/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flim.css";
import { Link } from "react-router-dom";
import { GetAllCinemas, GetTimes } from "../config";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";

export default function BookTicketDetail() {
  const [ListCinemas, setListCinemas] = useState([]);
  const [ListTime, setListTime] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [Cinemas, setCinemas] = useState();
  const [Auth, setAuth] = useState();
  // cinemas
  useEffect(() => {
    GetAllCinemas()
      .then((data) => {
        setListCinemas(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);

  //   time
  useEffect(() => {
    GetTimes()
      .then((data) => {
        setListTime(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);
  //   logged
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(user);
      } else {
        setAuth(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  console.log(ListTime);
  return (
    <>
      <div className="container" style={styles.class}>
        <div className="">
          <div className="Column">
            <h2 style={styles.a}>Đặt vé</h2>

            <div className="form-group">
             
            </div>
            <div className="form-group">
              <select
                onChange={(e) => setCinemas(e.currentTarget.value)}
                className="form-select"
                placeholder="Film"
              >
                <option>Chọn rạp</option>

                {ListCinemas.map((data, index) => {
               
                    return (
                      <option value={data.name} key={index}>
                        {data.name}
                      </option>
                    );
                })}
              </select>
            </div>
            <div className="form-group">
              <select
                onChange={(e) => setCinemas(e.currentTarget.value)}
                className="form-select"
                placeholder="Times"
              >
                <option>chọn ngày</option>
                {ListTime.map((data, index) => {
                
                    return (
                      <option value={data.time} key={index}>
                        {data.time}
                      </option>
                    );
                 
                })}
              </select>
            </div>
            {Auth != null ? (
              <Link
                to={"/book-ticket"}
                className="add btn btn-danger text-white text-uppercase"
              >
                Mua vé
              </Link>
            ) : (
              <Link
                to={"/"}
                onClick={() => {
                  alert(
                    "Vui lòng Đăng nhập trước ",
                    "Vui lòng Đăng nhập trước",
                    [{ text: "OK" }]
                  );
                }}
                className="add btn btn-danger text-white text-uppercase"
              >
                Mua vé
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
const styles = {
  a: {
    color: "black",
  },
  class: {
    opacity: 0.7,
    margin: 0,
    display: "inline-block",
    width: 300,
  },

  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },
  btn: {
    width: 100,
    marginRight: 10,
  },
};
