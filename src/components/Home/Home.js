import React from "react";
import DiscountSection from "../DiscountSection/DiscountSection";
import HeroSection from "../HeroSection/HeroSection";
import PackagesSection from "../PackagesSection/PackagesSection";
import SelectionSection from "../SelectionSection/SelectionSection";
import WhyUsSection from "../WhyUsSection/WhyUsSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<SelectionSection />
			<PackagesSection />
			<DiscountSection />
			<WhyUsSection />
		</>
	);
};

export default Home;
