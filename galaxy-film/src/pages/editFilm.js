/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, GetDetail } from "../config";
import {updateDoc, doc,} from "firebase/firestore";
import { useParams } from "react-router-dom";
export default function EditFlim() {
  // const [list, setList] = useState();
  const { id } = useParams();

  const [data, setData] = useState({});
  const handleChangeData = (target) => {
    setData({
     ...data,
      [target.name]: target.value,
    });
  }

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  useEffect(() => {
    GetDetail(id)
      .then((data) => {
        // setList(data[0]);
        setData(data[0])
        // console.log(data);
      })
      .catch((err) => console.log("error =>", err));
  }, [id]);

  const updateFilm = async () => {
    const flimRef = doc(db, "Film", id);
    await updateDoc(flimRef, data);
  };

  const phim = () => {
    return (
      <form class="row g-2 ">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label" >
            Diễn viên
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="email"
            class="form-control"
            id="dienvien"
            name="dienvien"
            value={data?.dienvien}
            placeholder={"nhập diễn viên"}
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Nhà Sản Xuât
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="email"
            class="form-control"
            id="nsx"
            name="nsx"
            value={data?.nsx}
            placeholder="nhập tên nhà sản xuất"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Tên phim
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="email"
            class="form-control"
            id="tenphim"
            name="tenphim"
            value={data?.tenphim}
            placeholder="nhập tên phim"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputEmail4" class="form-label">
            Tên Tiếng Việt
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="email"
            class="form-control"
            id="tenviet"
            name="tenviet"
            value={data?.tenviet}
            placeholder="nhập tên tiếng việt"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Mô Tả
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="text"
            class="form-control"
            id="mota"
            name="mota"
            value={data?.mota}
            placeholder="nhập mô tả"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Hình ảnh
          </label>
          <input
            onChange={(e) => handleChangeData(e.target)}
            type="text"
            class="form-control"
            id="hinhanh"
            name="hinhanh"
            value={data?.hinhanh}
            placeholder="nhập Hình"
          ></input>
        </div>
        <div className="row">
          <div class="col-md-3">
            <label for="inputAddress" class="form-label">
              Đạo diễn
            </label>
            <input
              onChange={(e) => handleChangeData(e.target)}
              type="text"
              class="form-control"
              id="daodien"
              name="daodien"
              value={data?.daodien}
              placeholder="nhập đạo diễn"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="inputCity" class="form-label">
              Thể Loại
            </label>
            <input
              onChange={(e) => handleChangeData(e.target)}
              type="text"
              class="form-control"
              id="theloai"
              name="theloai"
              value={data?.theloai}
              placeholder="nhập thể loại"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="inputCity" class="form-label">
              Quốc Gia
            </label>
            <input
              onChange={(e) => handleChangeData(e.target)}
              type="text"
              class="form-control"
              id="quocgia"
              name="quocgia"
              value={data?.quocgia}
              placeholder="nhập quốc gia"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="inputZip" class="form-label text-nowrap">
              Ngày Khởi Chiếu
            </label>
            <input
              type="date"
              class="form-control"
              name="ngaykhoichieu"
              value={data?.ngaykhoichieu}
              onChange={(e) => handleChangeData(e.target)}
            ></input>
          </div>
        </div>

      </form>
    );
  };

  return (
    <div className="bg-success p-2 text-dark bg-opacity-10">
      <div className="thing">
        <div
          className="container mx2 w-75 bg-white border rounded-3 border-dark p-5 border-opacity-50"
          style={{
            marginTop: "5%",
          }}
        >
          <h1 className="text-center pb-2 ">Update Film</h1>
          {phim()}
          <div className=" d-flex">
            <div className="col-4" />
            <Link to={"/listFilm"} className="col-4 mt-2 me-4">
              <button
                onClick={updateFilm}
                type="submit"
                className="btn btn-primary">
                Submit
              </button>
            </Link>
            <div className="col-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
