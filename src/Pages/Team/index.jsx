import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aboutprepaire from "../../Components/Team/Aboutsection";
import Prepaireteam from "../../Components/Team/TeamSection";
import Jointeam from "../../Components/Team/Jointeam";
// import { useNavigate } from "react-router-dom";

const Team = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="team-container">
			<div className="about-prepairw-outter-conatiner">
				<Aboutprepaire />
			</div>
			<div className="about-prepairw-outter-conatiner">
				<Prepaireteam />
			</div>

			<div className="about-prepairw-outter-conatiner">
				<Jointeam />
			</div>
		</div>
	);
};
export default Team;
