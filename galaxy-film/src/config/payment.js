import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export async function addPayment(
  ghe,
  loaive,
  loaicombo,
  rap,
  tenphim,
  timeout,
  tongtien,
  uid,
  ten
) {
  addDoc(collection(db, "datve"), {
    ghe: ghe,
    loaive: loaive,
    loaicombo: loaicombo,
    rap: rap,
    tenphim: tenphim,
    timeout: timeout,
    status: "pending",
    tongtien: tongtien,
    emailUser: uid,
    tenUser: ten,
  });
}
