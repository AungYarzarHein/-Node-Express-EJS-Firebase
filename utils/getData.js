
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"
import { db } from "../config.js";

export const  defaultFeatureImage = "https://firebasestorage.googleapis.com/v0/b/football-united-da3e2.appspot.com/o/FB_IMG_17141184671219752.jpg?alt=media&token=306e14b0-b276-4c7f-84d2-0ed99ff94397"

export const getPost = async (postId) => {
    const postData = await getDoc(doc(db,"details",postId));
    return postData.data()
}

export const getLastPost = async (collectionName) => {
    const data = await getDocs(query(collection(db,collectionName),orderBy("timeStamp","desc"),limit(1)));
    let arr = [] ;
    data.docs.forEach(item => arr.push(item.data())) ;
    return arr ;
}

export const getCollectionData = async (collectionName,limitNam) => {
    const data = await getDocs(query(collection(db,collectionName),orderBy("timeStamp","desc"),limit(limitNam))) ;
    let arr = [] ;
    data.docs.forEach(item => arr.push(item.data()));
    return arr

}

