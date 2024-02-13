import React from "react";
// import "./style.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
			hello
		</div>
	);
};
export default Team;
