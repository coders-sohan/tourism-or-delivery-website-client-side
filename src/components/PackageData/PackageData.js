import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const PackageData = (props) => {
	const { _id, name, price, rating, duration, img } = props.package;
	return (
		<>
			<div className="col">
				<div className="card h-100">
					<img src={img} className="card-img-top" alt="..." height="300px" />
					<div className="card-body">
						<p className="">
							<span className="fw-bold text-gray">
								<i className="far fa-calendar-alt text-general"></i> {duration}
							</span>
						</p>
						<h5 className="card-title fs-3 text-general mb-3">
							<i className="fas fa-map-marker-alt"></i>{" "}
							<Link
								className="text-decoration-none"
								to={`/packages/details/${_id}`}
							>
								<span>{name}</span>
							</Link>
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
							/>{" "}
							<span className="text-dark">({rating})</span>
						</div>
					</div>
					<div className="card-footer bg-white border-top-0 pb-3">
						<div className="d-flex justify-content-between align-items-center">
							<Link to={`/packages/details/${_id}`}>
								<button className="btn btn-general rounded-pill">
									Book Now
								</button>
							</Link>
							<span className="fw-bold fs-4 text-gray">${price}.00</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PackageData;
