
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { FB_KEY , DOMAIN , PRO_ID , STO_BACK_UP , SENDER_ID , MEA_ID , APP_ID } = process.env


const firebaseConfig = {
  apiKey: FB_KEY ,
  authDomain: DOMAIN,
  projectId: PRO_ID,
  storageBucket: STO_BACK_UP,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEA_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

