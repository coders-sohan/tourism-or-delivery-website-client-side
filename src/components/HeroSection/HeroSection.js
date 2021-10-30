import React from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="3"
						aria-label="Slide 4"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item carousel-item-1 active">
						<div className="container">
							<div className="d-flex">
								<div>
									<h5 className="text-light display-6 py-1">Welcome to our</h5>
									<h1 className="display-1 text-general py-2">Travel Agency</h1>
									<p className="fs-6 pt-1 pb-3 text-white">
										Qualified Staff With Expertise in Services <br /> We Offer
										for more Reasonable cost with love, Just explore about More!
									</p>
									<div>
										<NavLink
											to="/services"
											className="btn btn-general py-2 ps-2z"
										>
											Our service
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item carousel-item-2">
						<div className="container">
							<div className="d-flex">
								<div>
									<h5 className="text-light display-6 py-1">Welcome to our</h5>
									<h1 className="display-1 text-general py-2">Travel Agency</h1>
									<p className="fs-6 pt-1 pb-3 text-white">
										Qualified Staff With Expertise in Services <br /> We Offer
										for more Reasonable cost with love, Just explore about More!
									</p>
									<div>
										<NavLink
											to="/services"
											className="btn btn-general py-2 ps-2z"
										>
											Our service
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item carousel-item-3">
						<div className="container">
							<div className="d-flex">
								<div>
									<h5 className="text-light display-6 py-1">Welcome to our</h5>
									<h1 className="display-1 text-general py-2">Travel Agency</h1>
									<p className="fs-6 pt-1 pb-3 text-white">
										Qualified Staff With Expertise in Services <br /> We Offer
										for more Reasonable cost with love, Just explore about More!
									</p>
									<div>
										<NavLink
											to="/services"
											className="btn btn-general py-2 ps-2z"
										>
											Our service
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item carousel-item-4">
						<div className="container">
							<div className="d-flex justify-content-center">
								<div className="text-center">
									<h5 className="text-light display-6 py-1">Welcome to our</h5>
									<h1 className="display-1 text-general py-2">Travel Agency</h1>
									<p className="fs-6 pt-1 pb-3 text-white">
										Qualified Staff With Expertise in Services <br /> We Offer
										for more Reasonable cost with love, Just explore about More!
									</p>
									<div>
										<NavLink
											to="/services"
											className="btn btn-general py-2 ps-2z"
										>
											Our service
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
};

export default HeroSection;
