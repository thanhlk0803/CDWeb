import { db } from "./firebase";
import {
  collection,
  getDocs,
 
} from "firebase/firestore"; 
export  async function GetAllCinemas() {
    const ListCinemas = [];
    const querySnapshot = await getDocs(collection(db, "cinemas"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsa
      ListCinemas.push({ id: doc.id, ...doc.data() });
    });
  
    return ListCinemas;
}
export  async function GetTimes() {
    const ListCinemas = [];
    const querySnapshot = await getDocs(collection(db, "times"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsa
      ListCinemas.push({ id: doc.id, ...doc.data() });
    });
  
    return ListCinemas;
}