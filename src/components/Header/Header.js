import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light navbar-bg">
					<div className="container">
						<NavLink className="navbar-brand" to="/">
							<img
								src="https://tourism-website-react.netlify.app/logo.png"
								alt="logo"
								width="110px"
							/>
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
								<li className="nav-item me-3">
									<NavLink
										className="navbar-item nav-link"
										aria-current="page"
										to="/home"
									>
										Home
									</NavLink>
								</li>
								<li className="nav-item me-3">
									<NavLink className="navbar-item nav-link" to="/about">
										About
									</NavLink>
								</li>
								<li className="nav-item me-3">
									<NavLink className="navbar-item nav-link" to="/packages">
										Packages
									</NavLink>
								</li>
								<li className="nav-item me-3">
									<NavLink className="navbar-item nav-link" to="/contact">
										Contact
									</NavLink>
								</li>

								{!user?.email && (
									<>
										<li className="nav-item me-3">
											<NavLink className="navbar-item nav-link" to="/login">
												Login
											</NavLink>
										</li>
									</>
								)}

								{user?.email && (
									<>
										<li className="nav-item me-3">
											{
												<div className="navbar-item nav-link">
													<img
														className="rounded-circle"
														height="28px"
														width="28px"
														src={user.photoURL}
														alt="img"
													/>
													<span className="ms-2">{user.displayName}</span>
												</div>
											}
										</li>
										<button onClick={logOut} className="btn btn-login-logout">
											Log out
										</button>
									</>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;
