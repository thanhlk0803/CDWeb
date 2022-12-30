/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
export default function AddFilm() {

  const [date, setDate] = useState();
  console.log("Date", date);

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

    <div className="bg-success p-2 text-dark bg-opacity-10"
    >
      <Header />
      <div className="thing">
        <div className="container mx2 w-75 bg-white border rounded-3 border-dark p-5 border-opacity-50" style={{
          marginTop: '10%',
        }} >
          <h1 className="text-center pb-2 ">
            Adding Film
          </h1>
          <form class="row g-2 ">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Diễn viên</label>
              <input type="email" class="form-control" id="dienvien" placeholder="nhập tên diễn viên"></input>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Nhà Sản Xuât</label>
              <input type="email" class="form-control" id="nsx" placeholder="nhập tên nhà sản xuất"></input>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Tên phim</label>
              <input type="email" class="form-control" id="dienvien" placeholder="nhập tên phim"></input>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Tên Tiếng Việt</label>
              <input type="email" class="form-control" id="nsx" placeholder="nhập tên tiếng việt"></input>
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Mô Tả</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="nhập mô tả"></input>
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Hình Ảnh</label>
              <input type="file" name="images" class="form-control" onChange={onSelectFile} multiple accept="image/png, image/jpeg, image/webp"></input>
              <div className="images">
                {selectedImage && selectedImage.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} height="200"></img>
                      <button onClick={() => setSelectedImage(selectedImage.filter((e) => e !== image))}>delete</button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div class="col-md-4">
              <label for="inputCity" class="form-label">Thể Loại</label>
              <input type="text" class="form-control" id="inputCity" placeholder="nhập thể loại"></input>
            </div>
            <div class="col-md-4">
              <label for="inputCity" class="form-label">Quốc Gia</label>
              <input type="text" class="form-control" id="inputCity" placeholder="nhập quốc gia"></input>
            </div>
            <div class="col-md-4">
              <label for="inputZip" class="form-label text-nowrap">Ngày Khởi Chiếu</label>
              <input type="date" class="form-control" onChange={e => setDate(e.target.value)}></input>
            </div>
          </form>
          <div className=" d-flex">
            <div className="col-4" />
            <button type="submit" className="btn btn-primary col-4">Submit</button>
            <div className="col-4" />
          </div>
        </div>
        <Footer />

      </div>
    </div>

  );
}

