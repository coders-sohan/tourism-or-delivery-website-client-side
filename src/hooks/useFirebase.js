import { useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect } from "react";
import initializeFirebaseAuth from "../Firebase/Firebase.init";

initializeFirebaseAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
        // .then((result) => {
		// 	// console.log(result.user);
		// 	setUser(result.user);
		// })
		// .catch((error) => {
		// 	const errorMessage = error.message;
		// 	// console.log(errorMessage);
		// 	setError(errorMessage);
		// });
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// console.log("user already sign in", user);
				setUser(user);
			} else {
				setUser();
			}
			setIsLoading(false);
		});
	}, []);
	return {
		user,
		error,
		setUser,
		setError,
		logOut,
		signInWithGoogle,
		isLoading,
	};
};

export default useFirebase;
