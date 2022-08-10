// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCODeXNqrIFbkXm6InmS8_USSWF-xQlUfQ",
  authDomain: "chat-react-tailwind-app.firebaseapp.com",
  projectId: "chat-react-tailwind-app",
  storageBucket: "chat-react-tailwind-app.appspot.com",
  messagingSenderId: "64544629859",
  appId: "1:64544629859:web:abcf514b444e012b840456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

