import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PackageDetails = () => {
	const { id } = useParams();

	const [packageDetails, setPackageDetails] = useState({});
	console.log(packageDetails);

	useEffect(() => {
		const url = `http://localhost:5000/data/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPackageDetails(data));
	}, []);

	return (
		<div className="container">
			<div className="row">
                <div className="col-md-6">
                    <img src={packageDetails.img} alt={packageDetails.name} />
                </div>
                <div className="col-md-6">
                <div className="card h-100">
					<div className="card-body">
						<p className="">
							<span className="fw-bold text-gray">
								<i className="far fa-calendar-alt text-general"></i> {packageDetails.duration}
							</span>
						</p>
						<h5 className="card-title fs-3 text-general mb-3">
							<i className="fas fa-map-marker-alt"></i>{" "}
							<Link
								className="text-decoration-none"
								to={`/packages/details/${packageDetails._id}`}
							>
								<span>{packageDetails.name}</span>
							</Link>
						</h5>
						<div
							style={{
								fontSize: "14px",
								color: "orange",
							}}
						>
							<Rating
								initialRating={packageDetails.rating}
								emptySymbol="fa fa-star-o"
								fullSymbol="fa fa-star"
								readonly
							/>{" "}
							<span className="text-dark">({packageDetails.rating})</span>
						</div>
					</div>
					<div className="card-footer bg-white border-top-0 pb-3">
						<div className="d-flex justify-content-between align-items-center">
							<Link to={`/packages/details/${packageDetails._id}`}>
								<button className="btn btn-general rounded-pill">
									Book Now
								</button>
							</Link>
							<span className="fw-bold fs-4 text-gray">${packageDetails.price}.00</span>
						</div>
					</div>
				</div>
                    
                </div>
            </div>
		</div>
	);
};

export default PackageDetails;
