import React from "react";
// import { useNavigate } from "react-router-dom";
import "./style.scss";

// import Banner from "../../../Assets/Team/hero_banner.png";
import Banner from "../../../Assets/Team/Researcher.svg";

const BannerComponent = () => {
	// const navigate = useNavigate();
	return (
		<div className="banner-container">
			<div className="banner-content">
				<div className="banner-text-container">
					<div className="banner-title-text">
						<h1>
              Changing the <span>future of medicine</span>
						</h1>
						{/* <h2>future of medicine</h2> */}
					</div>

					<p>
            At Prepaire Labs, we are driven by an unwavering belief that the
            future of medicine lies in personalization and proactive care.
            Traditional healthcare often takes a reactive approach, addressing
            problems as they arise. Our mission is to revolutionize this model,
            empowering individuals to take ownership of their health and
            wellness.
					</p>
				</div>

				<button className="banner-viewRoles-button">View Open Roles</button>
			</div>
			<div className="banner-content-right">
				<img className="heroTeam-image" src={Banner} alt="hero banner" />
			</div>
		</div>
	);
};

export default BannerComponent;
