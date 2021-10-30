import React from "react";
import { Link } from "react-router-dom";
import "./DiscountSection.css";

const DiscountSection = () => {
	return (
		<div className="container py-5">
			<div className="discount-sec rounded rounded-3 p-5">
				<div className="py-5">
					<div className="py-5">
						<h5 className="display-6 text-white fw-bold">TRAVEL ADVENTURES</h5>
						<h1 className="display-2 text-white fw-bold">25% OFF</h1>
						<h5 className="display-6 text-white fw-bold">
							SPEND A BEST HOLIDAYS WITH US
						</h5>
					</div>
					<div>
						<Link to="/">
							<img
								src="https://tourism-website-react.netlify.app/playstore.png"
								className="img-fluid me-2"
								alt="playstore"
							/>
						</Link>
						<Link to="/">
							<img
								src="https://tourism-website-react.netlify.app/appstore.png"
								className="img-fluid ms-2"
								alt="appstore"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscountSection;
