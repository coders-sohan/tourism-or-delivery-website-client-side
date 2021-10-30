import React from "react";

const WhyUs = () => {
	return (
		<div className="container py-5">
			<div className="text-center">
				<p className="fs-5 text-general">Why Us</p>
				<h2
					className="display-6"
					style={{
						fontWeight: "600",
					}}
				>
					Why You Are Travel
					<br />
					With Us
				</h2>
                <div className="row pt-5">
                    <div className="col-lg-3 p-5 bg-primary"></div>
                    <div className="col-lg-3 p-5 bg-success"></div>
                    <div className="col-lg-3 p-5 bg-warning"></div>
                    <div className="col-lg-3 p-5 bg-info"></div>
                </div>
			</div>
		</div>
	);
};

export default WhyUs;
