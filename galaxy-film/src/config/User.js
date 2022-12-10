import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  where,
 
} from "firebase/firestore"; 
export async function GetAllUser(username) {
    const allUser = [];
    const q = query(collection(db, "users"), where("username", "==", `${username}`));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allUser.push({id: doc.id, ...doc.data() });
      console.log(doc.id, " => ", doc.data());
    });
    
    return allUser;
  }