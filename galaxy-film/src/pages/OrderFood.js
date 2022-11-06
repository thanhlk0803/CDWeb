import React from "react";
// dùng chính

// phần import trang
import Header from "../component/Header";
import ComboFood from "../component/ComboFood";
import "../css/OrderFood.css";
import Footer from "../component/Footer";
function OrderFood() {
  // Declare a new state variable, which we'll call "count"

  return (
    // container
    <>
      {/* header */}
      <div>
        <Header></Header>
      </div>
      {/* content */}
      <ComboFood />
      <div>
        <Footer />
      </div>
    </>
  );
}
export default OrderFood;
