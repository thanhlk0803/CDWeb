import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  AppContextProvider from "../../src/component/Contexts/AppContextProvider"
// đường dẫn trang

import OrderFood from "../pages/OrderFood";
import Payment from "../pages/Payment";
import SeatsChairs from "../pages/SeatsChairs";
import NotFound from "../pages/404NotFound";
import Home from "../pages/Home";
import SearchScreen from "../pages/Search";
import DetailPage from "../pages/DetailPages";
import Admin from "../pages/Admin";
import AddFilm  from "../pages/addFilm";
import EditFilm from "../pages/editFilm";
import AdminList from "../pages/ListFilmAD";
export default function Routers() {
  const url = "/book-ticket";

  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}>
          </Route>
          <Route path={"/detail/:id"} element={<DetailPage />} />
          <Route path={"/search"} key="keyword" element={<SearchScreen />} />

          <Route path={url + ""} element={<OrderFood />} />

          <Route path={url + "/seatschair"} element={<SeatsChairs />} />
          <Route path={url + "/seatschair/payment"} element={<Payment />} />
          <Route path={"/adminsEslL7UCPOhXJfFP9RO6qGBwJp93"} element={<Admin />} />
          <Route path={"/listFilm"} element={<AdminList />} />
          <Route path={"/listFilm/addFilm"} element={<AddFilm />} />
          <Route path={"/listFilm/editFilm"} element={<EditFilm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </AppContextProvider>
  );
}
