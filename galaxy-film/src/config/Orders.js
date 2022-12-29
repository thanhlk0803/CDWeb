import { db } from "./firebase";
import {
  collection,

  getDocs,

 
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