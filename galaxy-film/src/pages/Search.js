import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import {
  useLocation,
 
} from "react-router-dom/dist";
import { useState } from "react";
import { useEffect } from "react";
import { Search } from "../config";
export default function SearchScreen({ keyword }) {
  
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);

  }
  let query = useQuery();
  return (
    <div>
      <div>
        <Header />
        <Slider />
      </div>
      <div>
      <Child name={query.get("keyword")} />

      </div>

      <div>
        <Footer />

      </div>
    </div>
   
  );
}
function Child({ name }) {
  const [ListSearch, setList] = useState([]);
  useEffect(() => {
    Search(name)
      .then((data) => {
        setList(data);
      
      })
      .catch((err) => console.log("error =>", err));
  }, [name]);
  console.log(name);
  return (
    <>
      <section className="flim">
        <button className="btn btn-light" style={{ margin: 12 }}>
          Phim Đang Chiếu
        </button>

      
        <div className="container">
          <div className="row">
            {ListSearch.map((course, imdex) => {
              return (
                <div
                  className="col-xl-5 col-lg-1 col-md1 col-sm-1 flim-item"
                  key={imdex}
                >
                  <div className="card">
                    <img
                      src={course.hinhanh}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.tenphim}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
