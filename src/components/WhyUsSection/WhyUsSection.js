import React from "react";

const WhyUsSection = () => {
	return (
		<>
			<div className="container py-5">
				<div className="text-center">
					<p className="fs-5 text-general">Why We</p>
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
				</div>
				<div className="row pt-5 justify-content-center">
					<div className="col-lg-3 mx-4 p-5 bg-light-gray">
						<div className="">
							<img
								src="https://tourism-website-react.netlify.app/choose-1.png"
								className=""
								width="70px"
								alt="choose"
							/>
							<h3 className="m-0 py-3">Safe Travel</h3>
							<p className="m-0">
								printing and typesetting industry has been printing the
								industry’s ipsum
							</p>
						</div>
					</div>
					<div className="col-lg-3 mx-4 p-5 bg-light-gray">
						<div className="">
							<img
								src="https://tourism-website-react.netlify.app/choose-2.png"
								className=""
								width="70px"
								alt="choose"
							/>
							<h3 className="m-0 py-3">Awesome Guide</h3>
							<p className="m-0">
								printing and typesetting industry has been printing the
								industry’s ipsum
							</p>
						</div>
					</div>
					<div className="col-lg-3 mx-4 p-5 bg-light-gray">
						<div className="">
							<img
								src="https://tourism-website-react.netlify.app/choose-3.png"
								className=""
								width="70px"
								alt="choose"
							/>
							<h3 className="m-0 py-3">Save Money</h3>
							<p className="m-0">
								printing and typesetting industry has been printing the
								industry’s ipsum
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUsSection;
