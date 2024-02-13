/* eslint-disable linebreak-style */

import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
// import BiotuneLab from "../../../Assets/Biotune/biotune.png";
import BiotuneLab from "../../../Assets/Biotune/Bitotune3X.png";
import { useNavigate } from "react-router-dom";
import Img1 from "../../../Assets/Biotune/videoframe.png";
// import BiotuneLogo from "../../../Assets/Biotune/biotune-logo.png";

const NewBiotune = () => {
	const navigate = useNavigate();
	return (
		<div className="biotune-container">
			<div className="biotune-text-container">
				{/* <img className="biotune-logo" alt="biotune logo " src={BiotuneLogo} /> */}
				<div className="hero-title-wrapper">
					<h2>
						Designing for the Future of
						<span className="color-inlineVariation-blue">
							{" "}
							Personalized Therapy
						</span>
					</h2>
				</div>

				<p>
					Your personal sanctuary for cutting-edge wellness and life-enhancing
					therapies. We bring your digital twin to life
				</p>
				<button
					onClick={() => {
						navigate("/biotune");
					}}
					className="button-primary"
				>
					Learn more
				</button>
				<div className="camera-background-img" />
			</div>

			{/* <img className="biotune-image" alt="biotune lab image" src={BiotuneLab} /> */}

			{/* <div className="right-section"> */}
			<img className="biotune-image" alt="biotune lab image" src={BiotuneLab} />
			{/* </div> */}
			<div className="videoframe-img">
				<img className="img-css" alt="background image" src={Img1} />
			</div>
		</div>
	);
};
export default NewBiotune;
