/* eslint-disable jsx-a11y/alt-text */
import { doc, updateDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { db, GetListFilm } from "../config";
import { Link } from "react-router-dom";

// import "../public/assets1/bootstrap/css/bootstrap.min.css"
export default function Admin() {
    const [listFlim, setList] = useState([]);
    useEffect(() => {
        GetListFilm()
            .then((data) => {
                setList(data);
            })
            .catch((err) => console.log("error =>", err));
    }, []);
    console.log(listFlim);
    const active = async (index) => {
        const isActive = doc(db, "Flim", listFlim?.[index].id);
        await updateDoc(isActive, {
            status: "complete",
        });
        alert(
            "Thay đổi thành công",
            "Thay đổi thành công",
            [{ text: "OK" }]
        )
    };
    const flims = listFlim.map((course, index) => {
        return (
            <tr>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.tenphim}
                    </label>
                </td>
                <td>
                    <div className="card">
                        <img
                            src={course.hinhanh}
                            className="card-img-top"
                            alt="..." />
                    </div>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.mota}
                    </label>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.dienvien}
                    </label>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.daodien}
                    </label>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.ngaykhoichieu}
                    </label>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.nsx}
                    </label>
                </td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.quocgia}
                    </label></td>
                <td>
                    <label
                        style={{ fontSize: 10, }}>
                        {" "}
                        {course.theloai}
                    </label>
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
                                <div class="card-header py-3 d-flex">

                                    {/* <p class="text-primary m-0 fw-bold">Order</p> */}
                                    <div className="w-25 d-flex justify-content-between me-5 pe-5">
                                        <Link
                                            to={"/adminsEslL7UCPOhXJfFP9RO6qGBwJp93"}
                                            class="text-primary m-0 fw-bold text-decoration-none  "
                                        >
                                            Order
                                        </Link>

                                        <Link
                                            to={"/listFlim"}
                                            class="text-primary m-0 fw-bold me-5 text-decoration-none"
                                        >
                                            listFlim
                                        </Link>
                                    </div>

                                </div>
                                <div class="card-body">
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
                                                    <th>movie's name  </th>
                                                    <th>image</th>
                                                    <th>decription</th>
                                                    <th>Performers</th>
                                                    <th>director</th>
                                                    <th>premiere date</th>
                                                    <th>producer</th>
                                                    <th>nation</th>
                                                    <th>Category</th>
                                                    <th>edit</th>
                                                    <th>delete</th>
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
