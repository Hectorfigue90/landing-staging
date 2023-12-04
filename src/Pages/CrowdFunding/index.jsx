import React from "react";
import "./style.scss";
import CrowdHero from "../../Components/Crowdfunding/Hero/indes";
import CrowdWhy from "../../Components/Crowdfunding/Why";
import CrowdSteps from "../../Components/Crowdfunding/Steps";
import FeaturedCampaings from "../../Components/Crowdfunding/FeaturedCampaings";
import { RecentlyAdded } from "../../Components/Crowdfunding/RecentlyAdded";

function CrowdfundingPage() {
	return (
		<div className="crowdfunding-outter-container">
			<div className="crowdfunding-hero-outterContainer">
				<CrowdHero />
			</div>
			<div className="crowdfunding-hero-outterContainer">
				<CrowdWhy />
			</div>
			<div className="crowdfunding-hero-outterContainer">
				<CrowdSteps />
			</div>
			<div className="crowdfunding-hero-outterContainer">
				<FeaturedCampaings />
			</div>
			<div className="crowdfunding-hero-outterContainer">
				<RecentlyAdded />
			</div>
		</div>
	);
}
export default CrowdfundingPage;
