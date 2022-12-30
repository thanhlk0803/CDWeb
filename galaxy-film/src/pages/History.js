/* eslint-disable jsx-a11y/alt-text */
import { doc, updateDoc } from "@firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { db, GetOrder, GetOrderbyUser } from "../config";
import { auth } from "../config/firebase";
// import "../public/assets1/bootstrap/css/bootstrap.min.css"
export default function History() {
  const [ListOrder, setList] = useState([]);

  const [Auth, setAuth] = useState(null)
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    const listen = onAuthStateChanged(auth,(user)=>{
      if (user){
        setAuth(user);
      }else{
      setAuth(null);
      }
    });
    return () => {
      listen();
    }
   
  }, [])








  useEffect(() => {
    GetOrderbyUser(Auth)
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);
  console.log(ListOrder);
  const active = async (index) => {
    const isActive = doc(db, "datve", ListOrder?.[index].id);
    await updateDoc(isActive, {
      status: "complete",
    });
    alert("Thay đổi thành công", "Thay đổi thành công", [{ text: "OK" }]);
  };
 
  return (
    <div>
      <Header />
      <div id="wrapper">
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div class="container-fluid">
              <div class="card shadow">
                <div class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">Order</p>
                </div>
                <div class="card-body">
                  <div class="row"></div>
                  <div
                    class="table-responsive table mt-2"
                    id="dataTable"
                    role="grid"
                    aria-describedby="dataTable_info"
                  >
                    <table class="table my-1" id="dataTable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name Film</th>
                          <th>Combo1</th>
                          <th>Combo2</th>
                          <th>Combo3</th>
                          <th>Combo4</th>
                          <th>Ticket Adult</th>
                          <th>Ticket member</th>
                          <th>Ticket Double</th>
                          <th>Ticket Double memmber</th>
                          <th>Reference time</th>
                          <th>Rạp</th>
                          <th>Ghế</th>
                          <th>Total</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ListOrder.map((data, index) => {
                            if(ListOrder?.[index].emailUser === Auth.email){
                          return (
                            
                            <tr>
                              <td>
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: 10,
                                  }}
                                >
                                  {" "}
                                  {ListOrder?.[index].id}
                                </label>
                              </td>
                              <td>
                                {" "}
                                <label
                                  style={{
                                    color: "black",
                                    fontSize: 10,
                                    fontweight: "bold",
                                  }}
                                >
                                  {" "}
                                  {ListOrder?.[index].tenphim}
                                </label>
                              </td>
                              <td>{ListOrder?.[index].loaicombo.combo1}</td>
                              <td>{ListOrder?.[index].loaicombo.combo2}</td>
                              <td>{ListOrder?.[index].loaicombo.combo3}</td>
                              <td>{ListOrder?.[index].loaicombo.combo4}</td>
                              <td>{ListOrder?.[index].loaive.adult}</td>
                              <td>{ListOrder?.[index].loaive.member}</td>
                              <td>{ListOrder?.[index].loaive.double}</td>
                              <td>{ListOrder?.[index].loaive.doubleMember}</td>
                              <td>{ListOrder?.[index].timeout}</td>
                              <td>{ListOrder?.[index].rap}</td>
                              <td>{ListOrder?.[index].ghe}</td>
                              <td>{ListOrder?.[index].tongtien}</td>
                              {ListOrder?.[index].status === "pending" ? (
                              
                                  <td style={{ color: "yellow" }}>
                                    {ListOrder?.[index].status}
                                  </td>
                              ) : (
                                <td style={{ color: "green" }}>
                                  {ListOrder?.[index].status}
                                </td>
                              )}

                             
                             
                            </tr>
                          );
                            }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
