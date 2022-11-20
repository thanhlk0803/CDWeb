import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Slider />
      </div>
      {/* nội dung */}
      <div></div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
