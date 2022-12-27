import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// đường dẫn trang

import OrderFood from "../pages/OrderFood";
import Payment from "../pages/Payment";
import SeatsChairs from "../pages/SeatsChairs";
import NotFound from "../pages/404NotFound";
import Home from "../pages/Home";
import SearchScreen from "../pages/Search";
import DetailPage from "../pages/DetailPages";
import Admin from "../pages/Admin";
export default function Routers() {
  const url = "/book-ticket";

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}>
          </Route>
          <Route path={"/detail/:id"} element={<DetailPage />} />
          <Route path={"/search"} key="keyword" element={<SearchScreen />} />

          <Route path={url + ""} element={<OrderFood />} />

          <Route path={url + "/seatschair"} element={<SeatsChairs />} />
          <Route path={url + "/seatschair/payment"} element={<Payment />} />
          <Route path={"/admin"} element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
