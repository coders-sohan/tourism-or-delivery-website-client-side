import React from "react";
import WhyUsSection from "../WhyUsSection/WhyUsSection";
import "./About.css";

const About = () => {
	return (
		<>
			<div className="about-sec py-5">
				<div className="container py-5">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div>
								<p className="m-0 text-white fs-5 fw-bold">About Travel Inc.</p>
								<h1 className="display-5 fw-bold py-3 text-white">
                                The Best Travel Agency Company.
								</h1>
								<p className="m-0 text-white">
									Podcasting operational change management <br /> inside of
									workflows to establish.
								</p>
								<ul
									style={{ listStyle: "none", margin: "0", padding: "0" }}
									className="py-3"
								>
									<li>
										<p className="d-flex align-items-center text-white">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												Better security for patient privacy and information.
											</span>
										</p>
									</li>
									<li>
										<p className="d-flex align-items-center text-white">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												More products at lower prices.
											</span>
										</p>
									</li>
									<li>
										<p className="d-flex align-items-center text-white">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												connect customers with the power of eCommerce at all.
											</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
                            <img src="https://tourism-website-react.netlify.app/search-bg.jpg" className="img-fluid" alt="about" />
                        </div>
					</div>
				</div>
			</div>
			<WhyUsSection />
		</>
	);
};

export default About;
