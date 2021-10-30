import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { signInWithGoogle, error, setUser, setError } = useAuth();
	const history = useHistory();
	const location = useLocation();
	const redirectUrl = location.state?.from || "/home";

	const handleRedirectGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
				history.push(redirectUrl);
			})
			.catch((error) => {
				const errorMessage = error.message;
				// console.log(errorMessage);
				setError(errorMessage);
			});
	};
	return (
		<>
			<div className="login-sec">
				<div className="container">
					<div className="py-5">
						<div className="mx-auto w-lg-25 w-100">
							<div className="text-center" style={{ marginTop: "200px" }}>
								<button
									onClick={handleRedirectGoogleSignIn}
									className="btn btn-primary mt-5 mx-2 bg-general"
								>
									<span className="fs-4">Google Sign In</span>
									<i className="fab fs-4 fa-google ms-3 "></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
