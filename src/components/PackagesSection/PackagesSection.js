import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const PackageSection = () => {
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then((data) => setPackages(data.slice(0,3)));
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
									<Package key={packageData._id} package={packageData}></Package>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PackageSection;
