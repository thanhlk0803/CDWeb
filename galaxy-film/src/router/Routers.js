import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../component/Header';


// đường dẫn trang

import OrderFood from '../pages/OrderFood';
import Payment from '../pages/Payment';
import SeatsChairs from '../pages/SeatsChairs';
import NotFound from '../pages/404NotFound';
export default function Routers() {
  const url ="/book-ticket"
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Header />} />
          <Route path={url+""} element={<OrderFood />} />

          <Route path={url+"/seatschair"} element={<SeatsChairs />} />
         <Route path={url+"/seatschair/payment"} element={<Payment />} />
         <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </Router>
    </div>
  )
}
