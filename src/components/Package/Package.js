import React, { useEffect, useState } from "react";
import PackageData from "../PackageData/PackageData";

const Package = () => {
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		fetch("https://obscure-reef-62452.herokuapp.com/data")
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);
	return (
		<>
			<div>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Package;
