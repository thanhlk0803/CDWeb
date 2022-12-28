import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
 
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
export  async function Search(id) {
  const List = [];
  const q = query(collection(db, "Film"), where("tenphim", "==", `${id}`));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    List.push({id: doc.id, ...doc.data() });
    console.log(List);
  });
  
  return List;
}
export  async function Detail(id) {
  const List = [];
  const q = query(collection(db, "Film"),id);

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    List.push({ ...doc.data() });
    console.log(List);
  });
  
  return List;
}

export async function GetDetail(id) {
  const Users = [];
  const ref = doc(db, "Film", `${id}`);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    Users.push(docSnap.data());
  } else {
    console.log("No such document!");
  }
  return Users;
}
