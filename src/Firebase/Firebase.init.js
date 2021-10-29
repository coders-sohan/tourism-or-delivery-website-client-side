import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebaseAuth = () => {
	initializeApp(firebaseConfig);
};

export default initializeFirebaseAuth;
