import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageData from "../PackageData/PackageData";

const PackageSection = () => {
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch("https://obscure-reef-62452.herokuapp.com/data")
			.then((res) => res.json())
			.then((data) => setPackages(data.slice(0, 3)));
	}, []);
	return (
		<>
			<div className="package-sec">
				<div className="container py-5">
					<div className="text-center">
						<p className="fs-5 text-general">Choose Your Package</p>
						<h2
							className="display-6"
							style={{
								fontWeight: "600",
							}}
						>
							Select Your Best Package
							<br />
							For Your Travel
						</h2>
					</div>
					<div>
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
							{packages.map((packageData) => (
								<PackageData
									key={packageData._id}
									package={packageData}
								></PackageData>
							))}
						</div>
						<div className="mt-5 text-center">
							<Link
								to="/packages"
								className="btn btn-general rounded-pill py-2"
							>
								<span style={{ fontSize: "18px" }}>Load More</span>{" "}
								<i
									className="ms-3 fas fa-sync"
									style={{ fontSize: "14px" }}
								></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PackageSection;
