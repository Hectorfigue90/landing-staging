import React from "react";
import "./style.scss";
import img from "../../../Assets/CrowdfundingLanding/Kidsimage.png";
import imgA from "../../../Assets/CrowdfundingLanding/target.png";
import imgB from "../../../Assets/CrowdfundingLanding/HandDna.png";
import imgC from "../../../Assets/CrowdfundingLanding/world.png";
import { Link } from "react-router-dom";

function CrowdSteps() {
	return (
		<div className="crowdfunding-step-container">
			<div className="crowdfunding-stepText-container">
				<h1>What are your next steps?</h1>
				<h2>Together, we can prepare the future of medicine.</h2>

				<div className="crowdfunding-stepCards-container">
					<div className="crowdfunding-stepCard-container">
						<img alt="make an inpact" src={imgA} />
						<div className="crowdfunding-stepCardText-container">
							<h2>Make an Impact</h2>
							<p>
								Your contribution to Prepaire Community Fund will make a
								tangible impact on the lives of countless individuals.
							</p>
						</div>
					</div>
				</div>
				<div className="crowdfunding-stepCards-container">
					<div className="crowdfunding-stepCard-container">
						<img alt="make an inpact" src={imgB} />
						<div className="crowdfunding-stepCardText-container">
							<h2>Support what matters</h2>
							<p>
								This initiative focuses on funding promising drug candidates to
								meet critical medical needs, accelerating their development to
								benefit patients quickly
							</p>
						</div>
					</div>
				</div>
				<div className="crowdfunding-stepCards-container">
					<div className="crowdfunding-stepCard-container">
						<img alt="make an inpact" src={imgC} />
						<div className="crowdfunding-stepCardText-container">
							<h2>Join the Movement</h2>
							<p>
								Together, we can make a difference in the fight against disease.
								Every donation, no matter how small, brings us closer to
								transforming lives.
							</p>
						</div>
					</div>
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
			<img alt="kids to help" src={img}></img>
		</div>
	);
}
export default CrowdSteps;
