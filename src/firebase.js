import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDcclf7kiPWcley13sBljbokePzhA9JbEQ",
  authDomain: "first-project-c15c5.firebaseapp.com",
  projectId: "first-project-c15c5",
  storageBucket: "first-project-c15c5.appspot.com",
  messagingSenderId: "978425653711",
  appId: "1:978425653711:web:17e7df8e447958c6914aba",
  measurementId: "G-91WXBYH5PF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }; 

export default app;









