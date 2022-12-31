/* eslint-disable jsx-a11y/alt-text */
import { doc, updateDoc } from "@firebase/firestore";
import { AiFillFileAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { db, GetListFilm } from "../config";
import { Link } from "react-router-dom";

// import "../public/assets1/bootstrap/css/bootstrap.min.css"
export default function ListFilmAD() {
    const [listFilm, setList] = useState([]);
    useEffect(() => {
        GetListFilm()
            .then((data) => {
                setList(data);
            })
            .catch((err) => console.log("error =>", err));
    }, []);
    console.log(listFilm);
    const active = async (index) => {
        const isActive = doc(db, "Flim", listFilm?.[index].id);
        await updateDoc(isActive, {
            status: "complete",
        });
        alert(
            "Thay đổi thành công",
            "Thay đổi thành công",
            [{ text: "OK" }]
        )
    };
    const flims = listFilm.map((course, index) => {
        return (
            <tr>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.tenphim}
                    </label>
                </td>
                <td colspan="1">
                    <div className="card">
                        <img
                            src={course.hinhanh}
                            className="card-img-top"
                            alt="..." />
                    </div>
                </td>
                <td colspan="2" className="w-25">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.mota}
                    </label>
                </td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.dienvien}
                    </label>
                </td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.daodien}
                    </label>
                </td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.ngaykhoichieu}
                    </label>
                </td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.nsx}
                    </label>
                </td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.quocgia}
                    </label></td>
                <td colspan="1">
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.theloai}
                    </label>
                </td>
                <td colspan="1" >
                    <Link to="editFilm">
                        <button className="btn btn-success" style={{ width: 50, height: 30 }}>
                            <FaEdit className="mb-5" />
                        </button>
                    </Link>
                </td>
                <td colspan="1">
                    <Link to="">
                        <button className="btn btn-danger" style={{ width: 50, height: 30 }}>
                            <MdDeleteForever className="mb-5" />
                        </button>
                    </Link>
                </td>
            </tr>
        );
    })
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
                                        <Link to={"/adminsEslL7UCPOhXJfFP9RO6qGBwJp93"} class="text-primary fw-bold me-5 text-decoration-none">Order</Link>
                                        <Link to={"/listFilm"} class="text-primary fw-bold me-5 text-decoration-none">list Film</Link>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <div className="col-2"></div>
                                    <Link to="addFilm" className="col-1  mt-2 me-4">
                                        <button className="btn btn-primary" >
                                            <AiFillFileAdd  />
                                        </button>
                                    </Link>
                                </div>
                                <div class="card-body mx-3">
                                    <div class="row"></div>
                                    <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info" >
                                        <table class="table my-1" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >movie's name  </th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >image</th>
                                                    <th colspan="2" className="text-capitalize text-start text-nowrap w-25">decription</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >Performers</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >director</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >premiere date</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >producer</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >nation</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >Category</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >edit</th>
                                                    <th colspan="1" className="text-capitalize text-center text-nowrap "  >delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {flims}
                                            </tbody>
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
