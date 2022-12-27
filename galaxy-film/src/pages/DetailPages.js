import React from 'react';
import "../css/flim.css";
import "../css/Payment.css";
import {  Image } from "react-bootstrap";
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useParams, } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Detail } from '../config';
import {useDispatch, useSelector} from "react-redux";

export  default function DetailPage(){
const {id} =useParams();
const [ListUser, setList] = useState([]);
useEffect(() => {
  Detail(id)
   
    .catch((err) => console.log("error 111 =>", err));
}, [id]);
console.log(Detail(id));
    return(
        <>
        <Header/>
        <div className="firsttable mx-3">
            <table className="table text-start table-striped table-light ">
              <tbody>
                {/* phần tử  */}

                <div className="row">
                  <div className="col-75">
                    <div className="container">
                      <form action="/action_page.php">
                        <div className="row">
                          <div className="col-50">
                          <Image
                              style={{
                                display: "flex",
                                width: 250,
                              
                              }}
                            //   src={require("../assets/avata.jfif")}
                            />
                          </div>

                          <div className="col-50">
                            <h3>{ListUser.tenphim}</h3>
                           <label>Đạo diễn:  James Cameron</label>
                          </div>
                        </div>
                        <div >
                            <h2> Nội dung phim</h2>
                            <hr></hr>
                            <label >Những trích đoạn đầu tiên hé lộ diễn biến cuộc chiến tiếp theo giữa loài người và bộ tộc người Na’vi của hành tinh Pandora, vốn bắt đầu từ phần một. Hành tinh Pandora rực rỡ ở ngay phân cảnh đầu tiên. Tiếp đến, công chúa Neytiri (Zoe Saldana thủ vai) xuất hiện với đôi mắt tràn đầy cảm xúc dưới ánh nắng trong veo. Người xem được đi sâu vào khám phá hành tinh Pandora với nhiều cảnh quan đáng kinh ngạc, trong đó có dưới lòng đại dương sâu thẳm với những loài sinh vật kỳ bí, đúng như tên gọi của phần hai – The Way Of Water. </label>
                        </div>
                        <div >
                            <h2> LỊCH CHIẾU</h2>
                            <hr></hr>
                            

                          <div className="col-50">
                          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col">
                                <div className="p-3 border bg-light">15:30</div>:
                                </div>
                                <div className="col">
                                <div className="p-3 border bg-light">18:00</div>
                                </div>
                                <div className="col">
                                <div className="p-3 border bg-light">19:00</div>
                                </div>
                                <div className="col">
                                <div className="p-3 border bg-light">20:45</div>
                                </div>
                                <div className="col">
                                <div className="p-3 border bg-light">22:00</div>
                                </div>
                            
                            </div>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
          <Footer/>
        </>
    )
}