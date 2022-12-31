/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, GetDetail } from "../config";
import {updateDoc, doc,} from "firebase/firestore";
import { useParams } from "react-router-dom";
export default function EditFlim() {
  const [list, setList] = useState();
  const { id } = useParams();

  const [date, setDate] = useState();
  const [daoDien, setDaoDien] = useState();
  const [name, setName] = useState();
  const [nsx, setNsx] = useState();
  const [dienVien, setDienVien] = useState();
  const [tenTiengViet, setTenTiengViet] = useState();
  const [moTa, setMoTa] = useState();
  const [hinh, setHinh] = useState();
  const [theLoai, setTheLoai] = useState();
  const [quocGia, setQuocGia] = useState();

  useEffect(() => {
    GetDetail(id)
      .then((data) => {
        setList(data);
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
            onChange={(e) => setDienVien(e.target.value)}
            type="email"
            class="form-control"
            id="dienvien"
            value={dienVien}
            placeholder={"nhập diễn viên"}
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Nhà Sản Xuât
          </label>
          <input
            onChange={(e) => setNsx(e.target.value)}
            type="email"
            class="form-control"
            id="nsx"
            placeholder="nhập tên nhà sản xuất"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Tên phim
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="email"
            class="form-control"
            id="dienvien"
            placeholder="nhập tên phim"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputEmail4" class="form-label">
            Tên Tiếng Việt
          </label>
          <input
            onChange={(e) => setTenTiengViet(e.target.value)}
            type="email"
            class="form-control"
            id="nsx"
            placeholder="nhập tên tiếng việt"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Mô Tả
          </label>
          <input
            onChange={(e) => setMoTa(e.target.value)}
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="nhập mô tả"
          ></input>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Hình ảnh
          </label>
          <input
            onChange={(e) => setHinh(e.target.value)}
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="nhập Hình"
          ></input>
        </div>
        <div className="row">
          <div class="col-md-3">
            <label for="inputAddress" class="form-label">
              Đạo diễn
            </label>
            <input
              onChange={(e) => setDaoDien(e.target.value)}
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="nhập đạo diễn"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="inputCity" class="form-label">
              Thể Loại
            </label>
            <input
              onChange={(e) => setTheLoai(e.target.value)}
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="nhập thể loại"
            ></input>
          </div>
          <div class="col-md-3">
            <label for="inputCity" class="form-label">
              Quốc Gia
            </label>
            <input
              onChange={(e) => setQuocGia(e.target.value)}
              type="text"
              class="form-control"
              id="inputCity"
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
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>

      </form>
    );
  };

  const data = {
    tenphim: name,
    nsx: nsx,
    daodien: daoDien,
    ngaykhoichieu: date,
    dienvien: dienVien,
    tenviet: tenTiengViet,
    mota: moTa,
    hinhanh: hinh,
    theloai: theLoai,
    quocgia: quocGia,
  };

  const [selectedImage, setSelectedImage] = useState();
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImage(imagesArray);
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
