/* eslint-disable jsx-a11y/alt-text */
// import { doc, updateDoc } from "@firebase/firestore";
import { AiFillFileAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { db, GetListFilm } from "../config";
import { Link } from "react-router-dom";
import { doc,deleteDoc,} from "firebase/firestore";

// import "../public/assets1/bootstrap/css/bootstrap.min.css"
export default function Admin() {
  const [listFilm, setList] = useState([]);
  const [check, setCheck] = useState(false);
  
  const deleteFlim = async (id) => {
    const flim = doc(db, "Film", id);
    await deleteDoc(flim);
    setCheck(!check);
  };
  useEffect(() => {
    GetListFilm()
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log("error =>", err));
  }, [check]);
  console.log(listFilm);

  const flims = listFilm.map((course, index) => {
    return (
      <tr>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.tenphim}</label>
        </td>
        <td colspan="1">
          <div className="card">
            <img src={course.hinhanh} className="card-img-top" alt="..." />
          </div>
        </td>
        <td colspan="2" className="w-25">
          <label style={{ fontSize: 10 }}> {course.mota}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.dienvien}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.daodien}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.ngaykhoichieu}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.nsx}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.quocgia}</label>
        </td>
        <td colspan="1">
          <label style={{ fontSize: 10 }}> {course.theloai}</label>
        </td>
        <td colspan="1">
          <Link to={"/listFilm/editFilm/" + course.id}>
            <button
              className="btn btn-success"
              style={{ width: 50, height: 30 }}
            >
              <FaEdit className="mb-5" />
            </button>
          </Link>
        </td>
        <td colspan="1">
          <Link to="">
            <button
              onClick={() => deleteFlim(course.id)}
              className="btn btn-danger"
              style={{ width: 50, height: 30 }}
            >
              <MdDeleteForever className="mb-5" />
            </button>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Header />
      <div id="wrapper">
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div class="container-fluid">
              <div class="card shadow">
                <div class="card-header py-3 d-flex justify-content-between">
                  {/* <p class="text-primary m-0 fw-bold">Order</p> */}
                  <div className=" d-flex justify-content-between me-5 pe-5">
                    <Link
                      to={"/adminsEslL7UCPOhXJfFP9RO6qGBwJp93"}
                      class="text-primary fw-bold me-4 text-decoration-none"
                    >
                      Order
                    </Link>
                    <Link
                      to={"/listFilm"}
                      class="text-primary fw-bold text-decoration-none text-nowrap ms-5 "
                    >
                      list Film
                    </Link>
                  </div>
                  <div className="col-2"></div>
                  <Link to="addFilm" className="col-1 ">
                    <button className="btn btn-primary">
                      <AiFillFileAdd />
                    </button>
                  </Link>
                </div>
                  {/* <div className="d-flex justify-content-between w-100">
                </div> */}
                <div class="card-body mx-3">
                  <div class="row"></div>  
                  <div
                    class="table-responsive table mt-2"
                    id="dataTable"
                    role="grid"
                    aria-describedby="dataTable_info"
                  >
                    <table class="table my-1" id="dataTable">
                      <thead>
                        <tr>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            movie's name{" "}
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            movie's name{" "}
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            image
                          </th>
                          <th
                            colspan="2"
                            className="text-capitalize text-start text-nowrap w-25"
                          >
                            decription
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            Performers
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            director
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            premiere date
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            producer
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            nation
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            Category
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            edit
                          </th>
                          <th
                            colspan="1"
                            className="text-capitalize text-center text-nowrap "
                          >
                            delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>{flims}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
