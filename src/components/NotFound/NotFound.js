import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
	return (
		<>
			<div className="not-found">
				<div className="container py-5">
					<div className="row">
						<div className="text-center">
							<img
								className="img-fluid"
								src="https://tourism-website-react.netlify.app/404.png"
								alt="404 error"
							/>
						</div>
						<h1 className="fw-light mt-5 text-center">We Think. You’re Lost</h1>
						<div className="text-center my-5">
							<NavLink to="/home" className="btn btn-general">
								Back to Home Page
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
