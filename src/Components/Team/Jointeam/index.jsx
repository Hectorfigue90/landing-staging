import React from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ShutterStock from "../../../Assets/Team/shutterstock.png";

const Jointeam = () => {
	return (
		<div className="join-prepaire-container">
			<div className="join-inner-conatiner">
				<div className="join-team-text-box">
					<div className="first-text_join_team">
						<div className="do_you-join">
							Do you want to <span>join the team? </span>{" "}
						</div>
						<div>
							Do you share our passion for transforming healthcare? Are you a
							visionary, a problem-solver, or an innovator at heart? If you
							thrive in a dynamic environment where your work helps shape a
							healthier future, then Prepaire Labs might just be your next great
							adventure. Our teams are multidisciplinary by nature and we are
							always willing to share our knowledge! Join our team and play a
							pivotal role in changing the future of medicine.
						</div>
					</div>
					<button type="button" className="open-role-btn">
						<div>View open roles</div>
					</button>
				</div>
				<div className="join-team-image-box">
					<img src={ShutterStock} alt="" />
				</div>
			</div>
		</div>
	);
};
export default Jointeam;
