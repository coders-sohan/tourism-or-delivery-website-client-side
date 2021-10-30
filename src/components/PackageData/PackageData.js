import React from "react";
import Rating from "react-rating";

const PackageData = (props) => {
	const { name, price, rating, duration, img } = props.package;
	console.log(props.package);
	return (
		<>
			<div className="col">
				<div className="card h-100">
					<img
						src={img}
						className="card-img-top"
						alt="..."
                        height="300px"
					/>
					<div className="card-body">
						<p className="">
							<span className="fw-bold text-gray">
								<i className="far fa-calendar-alt text-general"></i> {duration}
							</span>
						</p>
						<h5 className="card-title fs-3 text-general mb-3">
							<i className="fas fa-map-marker-alt"></i>{" "}
							<span>{name}</span>
						</h5>
						<div
							style={{
								fontSize: "14px",
								color: "orange",
							}}
						>
							<Rating
								initialRating={rating}
								emptySymbol="fa fa-star-o"
								fullSymbol="fa fa-star"
								readonly
							/> <span className="text-dark">({rating})</span>
						</div>
					</div>
					<div className="card-footer bg-white border-top-0 pb-3">
						<div className="d-flex justify-content-between align-items-center">
							<button className="btn btn-general rounded-pill">Book Now</button>
							<span className="fw-bold fs-4 text-gray">${price}.00</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PackageData;
