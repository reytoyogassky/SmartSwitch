
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket:process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId:process.env.NEXT_PUBLIC_APP_ID ,
  apiKey: "AIzaSyAZXKvBK68RIz9SvBfdph9AzXlvK0iQUQo",
  authDomain: "myiot-1a21e.firebaseapp.com",
  databaseURL: "https://myiot-1a21e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myiot-1a21e",
  storageBucket: "myiot-1a21e.firebasestorage.app",
  messagingSenderId: "1092763659357",
  appId: "1:1092763659357:web:325b6c8d7da0e27cd2b1b4",
  measurementId: "G-Z0HT36X5GQ"
};

// Initialize Firebase
const firebaseApp =  initializeApp(firebaseConfig);


export default firebaseApp;
