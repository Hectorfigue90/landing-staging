import React, { useState } from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import PrepaireLogo from "../../../Assets/Team/prepire-logo.svg";
import CarlProfile from "../../../Assets/Team/ProfilePicture/Carl Profile 1.png";
import SteveProfile from "../../../Assets/Team/ProfilePicture/Steve Carroll 1.png";
import VicentProfile from "../../../Assets/Team/ProfilePicture/Vicent good 1.png";
import BrentProfile from "../../../Assets/Team/ProfilePicture/BrentSuit 1.png";
import SergeProfile from "../../../Assets/Team/ProfilePicture/Serge new 1.png";
import AlsadirProfile from "../../../Assets/Team/ProfilePicture/Alasdair 1.png";
import RobProfile from "../../../Assets/Team/ProfilePicture/Rob tie 1.png";
import FredickProfile from "../../../Assets/Team/ProfilePicture/Fred 23 1.png";

const Prepaireteam = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object

	const [Leadershipclass, setLeadershipclass] = useState("navtab-btn-active");
	const [Scienceclass, setSceinceclass] = useState("navtab-btn");
	const [Adminclass, setAdminclass] = useState("navtab-btn");
	const [Developclass, setDevelopclass] = useState("navtab-btn");

	const handleSlectvet = (val) => {
		console.log(val);
		if (val === "Leadership") {
			setLeadershipclass("navtab-btn-active");
			setSceinceclass("navtab-btn");
			setAdminclass("navtab-btn");
			setDevelopclass("navtab-btn");
		} else if (val === "Science") {
			setSceinceclass("navtab-btn-active");
			setLeadershipclass("navtab-btn");
			setAdminclass("navtab-btn");
			setDevelopclass("navtab-btn");
		} else if (val === "Administrative") {
			setAdminclass("navtab-btn-active");
			setLeadershipclass("navtab-btn");
			setSceinceclass("navtab-btn");
			setDevelopclass("navtab-btn");
		} else if (val === "Development") {
			setDevelopclass("navtab-btn-active");
			setLeadershipclass("navtab-btn");
			setAdminclass("navtab-btn");
			setSceinceclass("navtab-btn");
		}
	};

	return (
		<div className="prepaire-team-container">
			<div className="talented_team">
				<img src={PrepaireLogo} alt="logo" />
				<div className="talented-tem-text">
          Our <span> talented team </span>
				</div>
			</div>
			<div className="vertical-section">
				<button
					className={Leadershipclass}
					onClick={() => handleSlectvet("Leadership")}
				>
          Leadership
				</button>
				<button
					className={Scienceclass}
					onClick={() => handleSlectvet("Science")}
				>
          Science
				</button>
				<button
					className={Adminclass}
					onClick={() => handleSlectvet("Administrative")}
				>
          Administrative
				</button>
				<button
					className={Developclass}
					onClick={() => handleSlectvet("Development")}
				>
          Development
				</button>
			</div>
			<div className="photo-section">
				<div className="photo-section-item">
					<div className="photo-box">
						<div className="photo">
							<img src={CarlProfile} alt="carl" />
						</div>
						<div className="name">Carl Freer</div>
						<div className="designation">Chief Executive Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={SteveProfile} alt="carl" />
						</div>
						<div className="name">Steve Carroll</div>
						<div className="designation">Chief Executive Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={VicentProfile} alt="carl" />
						</div>
						<div className="name">Dr. Vicent J. Ribas Ripoll</div>
						<div className="designation">Chief Science Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={BrentProfile} alt="carl" />
						</div>
						<div className="name">Brent Pass</div>
						<div className="designation">Chief Operating Officer</div>
					</div>
				</div>
				<div className="photo-section-item">
					<div className="photo-box">
						<div className="photo">
							<img src={SergeProfile} alt="carl" />
						</div>
						<div className="name">Dr. Serge Shityakov</div>
						<div className="designation">Chief Laboratory Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={AlsadirProfile} alt="carl" />
						</div>
						<div className="name">Alasdair Moore</div>
						<div className="designation">Finance Director</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={RobProfile} alt="carl" />
						</div>
						<div className="name">Dr Rob Caldwell</div>
						<div className="designation">VP Govt Affairs</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={FredickProfile} alt="carl" />
						</div>
						<div className="name">Frederick Kolberg</div>
						<div className="designation">VP Prepaire Shield</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Prepaireteam;
