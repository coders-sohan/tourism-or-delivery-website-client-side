import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="border-top footer">
				<div className="container">
					<footer className="pt-5 pb-2">
						<div className="row justify-content-between">
							<div className="col-lg-2 col-md-4 col-4">
								<h5>Other Pages</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/home" className="nav-link p-0 text-muted">
											Home
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/about" className="nav-link p-0 text-muted">
											About
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Booking
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											FAQs
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/contact" className="nav-link p-0 text-muted">
											Contact
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-4 col-4">
								<h5>Pages</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Terms & Conditions
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Privacy & Policies
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Cookies Policies
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-lg-2 col-md-4 col-4">
								<h5>Login/Register</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Sign In
										</Link>
									</li>
									<li className="nav-item mb-2">
										<Link to="/" className="nav-link p-0 text-muted">
											Sign Up
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-lg-4 col-md-4 col-12 m-0 pt-4 offset-1">
								<form>
									<h5>Subscribe to our newsletter</h5>
									<p>Monthly digest of whats new and exciting from us.</p>
									<div className="d-flex w-100 gap-2">
										<label htmlFor="newsletter1" className="visually-hidden">
											Email address
										</label>
										<input
											id="newsletter1"
											type="text"
											className="form-control"
											placeholder="Email address"
										/>
										<button className="btn btn-general" type="button">
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="d-flex justify-content-between pt-4 pb-3 border-top">
							<p className="m-0">
								&copy; All rights reserved by Travel {Date().slice(11, 15)}
							</p>
							<ul className="list-unstyled d-flex m-0">
								<li className="ms-3">
									<Link className="link-dark" to="/">
										<i className="fab fa-facebook fs-4"></i>
									</Link>
								</li>
								<li className="ms-3">
									<Link className="link-dark" to="/">
										<i className="fab fa-twitter fs-4"></i>
									</Link>
								</li>
								<li className="ms-3">
									<Link className="link-dark" to="/">
										<i className="fab fa-github fs-4"></i>
									</Link>
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Footer;
