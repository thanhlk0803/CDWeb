import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Flim from "../component/Flim";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Slider />
      </div>
      <div>
        <Flim/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
