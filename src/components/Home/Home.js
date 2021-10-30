import React from "react";
import DiscountSection from "../DiscountSection/DiscountSection";
import HeroSection from "../HeroSection/HeroSection";
import PackagesSection from "../PackagesSection/PackagesSection";
import SelectionSection from "../SelectionSection/SelectionSection";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
	return (
		<>
			<HeroSection />
			<SelectionSection />
			<PackagesSection />
			<DiscountSection />
			<WhyUs />
		</>
	);
};

export default Home;
