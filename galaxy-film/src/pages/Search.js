import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Flim from "../component/flim";
import { Link, useNavigate, useParams } from "react-router-dom/dist";
export default function Search() {
    const navigate = useNavigate();
    const {search} = useParams();
  return (
    <div>
     con Chiếu
    </div>
  );
}
