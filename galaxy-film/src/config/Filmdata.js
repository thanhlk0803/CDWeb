import { db } from "./firebase";
import {
  collection,
  getDocs,
 
} from "firebase/firestore"; 
export  async function GetListFilm() {
    const ListFilm = [];
    const querySnapshot = await getDocs(collection(db, "Film"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsa
      ListFilm.push({ id: doc.id, ...doc.data() });
    });
  
    return ListFilm;
}