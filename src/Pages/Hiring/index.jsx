import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Openposition from "../../Components/Hiring/OpenPosition";
import MedicianeDiffrentComp from "../../Components/Hiring/MedicianDiffernetComp";

// import { useNavigate } from "react-router-dom";

const Hiring = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="Hiring-team-container-prepaire">
			<div className="open_postion-outter-conatiner">
				<Openposition />
			</div>
			<div className="open_postion-outter-conatiner">
				<MedicianeDiffrentComp />
			</div>
		</div>
	);
};
export default Hiring;
