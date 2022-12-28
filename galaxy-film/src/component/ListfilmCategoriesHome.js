/* eslint-disable no-unused-vars */
import Table from "react-bootstrap/Table";
import { GetListFilm } from "../config";
import React, { useEffect, useState } from "react";
import "../css/flim.css";

export default function SmallExample() {
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
    
    
    </>
  );
}
