import React from "react";
import "./style.scss";
import img from "../../../Assets/CrowdfundingLanding/ArrowImage.png";
import { Link } from "react-router-dom";
// import SubscriptionModal from "../SubscriptionModal";

function CrowdHero() {
	return (
		<>
			{/* <SubscriptionModal /> */}
			<div className="crowdfunding-hero-container">
				<div className="crowdfunding-heroText-container">
					<div>
						<p className="blue" style={{ fontWeight: "600" }}>
							FOR DONORS
						</p>
						<h1>Empowering Science, </h1>
						<h1 className="blue">Transforming Lives</h1>
					</div>
					<div className="crowdfunding-heroP-container">
						<p>
							Join us in our mission to support independent researchers and SMEs
							who are on the brink of groundbreaking discoveries that could
							revolutionize healthcare.
						</p>
						<p>
							With your generous contribution, we can help bring their
							innovative drug candidates to life, paving the way for a healthier
							future for all.
						</p>
					</div>
					<div className="crowfunding-heroButton-container">
						<Link
							className="button-blue"
							to="https://app.prepaire.com:5067/#/crowdfunding"
							// to="https://prepaire-staging.vercel.app/#/login"
						>
							Start donating
						</Link>
						<button type="button">Create campaign</button>
					</div>
				</div>
				<img alt=" crowd mopving in one direction" src={img} />
			</div>
		</>
	);
}

export default CrowdHero;
