import React from "react";
// import { useNavigate } from "react-router-dom";
import "./style.scss";
// import Banner from "../../../Assets/Team/hero_banner.png";

const BannerComponent = () => {
	// const navigate = useNavigate();
	return (
		<div className="banner-container">
			<div className="banner-content">
				<div className="banner-text-container">
					<div className="banner-title-text">
						<h1>We’re changing the </h1>
						<h2>future of medicine</h2>
					</div>

					<p>
            At Prepaire Labs, we are driven by an unwavering belief that the
            future of medicine lies in personalization and proactive care.
            Traditional healthcare often takes a reactive approach, addressing
            problems as they arise. Our mission is to revolutionize this model,
            empowering individuals to take ownership of their health and
            wellness. Our team is composed of visionaries, medical experts, and
            brilliant technologists united by a common purpose. We harness the
            power of cutting-edge science, advanced data analytics, and
            personalized interventions to predict and prevent health issues
            before they become major concerns. With Prepaire Labs, individuals
            unlock insights into their unique health journeys, enabling a shift
            toward informed decision-making and a healthier, more fulfilling
            life.
					</p>
				</div>

				<button className="banner-viewRoles-button">View Open Roles</button>
			</div>
			{/* <div className="banner-content" style={{ width: "60%" }}>
				<img className="heroTeam-image" src={Banner} alt="hero banner" />
			</div> */}
		</div>
	);
};

export default BannerComponent;
