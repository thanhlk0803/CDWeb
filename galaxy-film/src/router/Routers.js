import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// đường dẫn trang

import OrderFood from '../pages/OrderFood';
import Payment from '../pages/Payment';
import SeatsChairs from '../pages/SeatsChairs';
import NotFound from '../pages/404NotFound';
import Home from '../pages/Home';
export default function Routers() {
  const url ="/book-ticket"
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={url+"/:FilmID"} element={<OrderFood />}  />
          <Route path={url+"/seatschair/:FilmID"} element={<SeatsChairs />} />
         <Route path={url+"/seatschair/payment"} element={<Payment />}  exact/>
         <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </Router>
    </div>
  )
}
