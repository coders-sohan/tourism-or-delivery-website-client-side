import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const SelectionSection = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<>
			<div className="container py-5">
				<div
					className="row rounded rounded-lg"
					style={{
						backgroundColor: "rgba(12, 146, 232, .6)",
					}}
				>
					<div className="col-lg-3 p-5">
						<input
							className="form-control text-center"
							type="text"
							placeholder="Where To..."
							required
						/>
					</div>
					<div className="col-lg-3 p-5">
						<DatePicker
							className="form-control text-center"
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
					</div>
					<div className="col-lg-3 p-5">
						<div class="dropdown">
							<button
								class="form-control dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Travel Type
							</button>
							<ul
								class="dropdown-menu text-center"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<Link class="dropdown-item" to="/">
										Adventure
									</Link>
								</li>
								<li>
									<Link class="dropdown-item" to="/">
										Romantic
									</Link>
								</li>
								<li>
									<Link class="dropdown-item" to="/">
										Vacation
									</Link>
								</li>
								<li>
									<Link class="dropdown-item" to="/">
										Explore
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 p-5 text-center">
						<button className="btn btn-general justify-content-between align-items-center">
							<i class="fas fa-search-location me-2"></i> <span>Find Now</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectionSection;
