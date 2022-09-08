import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBYSLAzKLApmXZ7pWiT0fe2BhM5YuqZEbY",
  authDomain: "tools-shop-d164b.firebaseapp.com",
  projectId: "tools-shop-d164b",
  storageBucket: "tools-shop-d164b.appspot.com",
  messagingSenderId: "1068111967763",
  appId: "1:1068111967763:web:9ad7d3b3f3130dab7871e6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
