import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ShutterStock from "../../../Assets/Team/shutterstock.png";

const Jointeam = () => {
	const navigate = useNavigate();
	return (
		<div className="join-prepaire-container">
			<div className="join-inner-conatiner">
				<div className="join-team-text-box">
					<div className="first-text_join_team">
						<div className="do_you-join">
              Do you want to <span>join the team? </span>{" "}
						</div>
						<div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure{" "}
						</div>
					</div>
					<button
						type="button"
						className="open-role-btn"
						onClick={() => {
							navigate("/hiring");
						}}
					>
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
