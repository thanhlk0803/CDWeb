import React, { useEffect, useState } from "react";
import "../css/flim.css";
import { GetListFilm } from "../config";

<<<<<<< HEAD
import React from 'react';
import {data} from '../data';
import '../css/flim.css';
=======
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
>>>>>>> main

export default function Flim(){
    
    return (
        <>
        <section className="flim">
        <button  class="btn btn-light" style={{margin:12}} >Phim Đang Chiếu</button>
        
            <div className="container">
                <div className="row">
                    {data.map((course, imdex)=>{
                        return (
                            <div className="col-xl-3 col-lg-4 col-md6 col-sm-12 flim-item" key={imdex}>
                                <div className="card">
                                    <img src={course.imageUrl} className="card-img-top" alt="..."/> 
                                    <div className="card-body">
                                        <h5 className="card-title">{course.Name}</h5>    
                                    </div>   
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </section>
        
        </>
    )
}
