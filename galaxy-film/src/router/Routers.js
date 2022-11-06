import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComboFood from '../component/ComboFood';
import Footer from '../component/Footer';
import SeatChairs from '../component/SeatChairs';

// đường dẫn trang

import OrderFood from '../pages/OrderFood';
import Payment from '../pages/Payment';
import SeatsChairs from '../pages/SeatsChairs';
export default function Routers() {
  const url ="/book-ticket"
  return (
    <div>
      <Router>
        <Routes>
          <Route path={""} element={<Footer />} />
          <Route path={url+""} element={<OrderFood />} />

          <Route path={url+"/seatschair"} element={<SeatsChairs />} />
         <Route path={url+"/seatschair/payment"} element={< Payment />} />

        </Routes>
      </Router>
    </div>
  )
}
