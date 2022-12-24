import { db } from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
 
} from "firebase/firestore"; 
import { Alert } from "reactstrap";
export async function GetAllUserDetail(username) {
    const allUser = [];
    const q = query(collection(db, "users"), where("username", "==", `${username}`));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allUser.push({id: doc.id, ...doc.data() });
    });
    
    return allUser;
  }
  export async function addUser(uid,name, email ,password) {
    addDoc(collection(db, "users",uid + ''), {
      name: name,
    
      email: email,
      password: password,
    });
    Alert.alert('Thông báo', 'Thêm thành công thành công', [{ text: 'OK' }])
  }
  export async function GetAllUser() {
    const allUser = [];
    const q = query(collection(db, "users"));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allUser.push({id: doc.id, ...doc.data() });
    });
    
    return allUser;
  }