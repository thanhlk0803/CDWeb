import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Flim from "../component/flim";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Slider />
      </div>
      <div>
      <div className="row">
                        <div className="card">
                        <img src={course.imageUrl} className="card-img-top" alt="..."/> 
                        <div className="card-body">
                        <h5 className="card-title">{course.Name}</h5>    
                    </div>   
                </div>
            </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
