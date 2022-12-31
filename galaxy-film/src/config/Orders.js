import { db } from "./firebase";
import {
  collection,

  getDocs,
  where,

 
} from "firebase/firestore"; 
export  async function GetOrder() {
    const ListOrder = [];
    const querySnapshot = await getDocs(collection(db, "datve"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsa
      ListOrder.push({ id: doc.id, ...doc.data() });
    });
  
    return ListOrder;
}
export  async function GetOrderbyUser(email) {
  const ListOrder = [];
  const querySnapshot = await getDocs(collection(db, "datve"), where("emailUser", "==", `${email}`));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshotsa
    ListOrder.push({ id: doc.id, ...doc.data() });
  });

  return ListOrder;
}