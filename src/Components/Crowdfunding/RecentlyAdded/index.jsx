import React from "react";
// import { Component } from "./Component";
// import { Labels } from "./Labels";
// import { PropertyPrepWrapper } from "./PropertyPrepWrapper";
import "./style.css";
import image1 from "../../../Assets/CrowdfundingLanding/recomendee/iamga.png";
import image2 from "../../../Assets/CrowdfundingLanding/recomendee/icona.png";
import image3 from "../../../Assets/CrowdfundingLanding/recomendee/imageb.png";
import image4 from "../../../Assets/CrowdfundingLanding/recomendee/iconb.png";
import image5 from "../../../Assets/CrowdfundingLanding/recomendee/imagec.png";
import image6 from "../../../Assets/CrowdfundingLanding/recomendee/iconc.png";
import image7 from "../../../Assets/CrowdfundingLanding/recomendee/imaged.png";
import image8 from "../../../Assets/CrowdfundingLanding/recomendee/icond.png";
/* eslint-disable */

export const RecentlyAdded = () => {
	return (
		<div className="recently-added-container">
			<div className="frame2">
				<div className="placeholder">Recently added</div>
				<div className="div-wrapper">
					<div className="text-wrapper">View all campaigns</div>
				</div>
			</div>
			<div className="frame-holderTemp">
				<div className="frame3">
					<div className="group-wrapper">
						<div className="group">
							<img className="DALLE" alt="Dalle" src={image1} />
							<div className="div">
								<img className="profile-pic" alt="Profile pic" src={image2} />
								<p className="placeholder">
									Help Brian’s battle Against Sickle Cell Disease with Gene
									Therapy.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="frame3">
					<div className="group-wrapper">
						<div className="group">
							<img className="DALLE2" alt="Dalle" src={image3} />
							<div className="div">
								<img className="profile-pic" alt="Profile pic" src={image4} />
								<p className="placeholder">
									Hearthier: The revolutionary Cardiac App for the New World.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="frame3">
					<div className="group-wrapper">
						<div className="group">
							<img className="DALLE" alt="Dalle" src={image5} />
							<div className="div">
								<img className="profile-pic" alt="Profile pic" src={image6} />
								<p className="placeholder">
									Innovative Drug Discovery App for Rare Diseases
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="frame3">
					<div className="group-wrapper">
						<div className="group">
							<img className="DALLE" alt="Dalle" src={image7} />
							<div className="div">
								<img className="profile-pic" alt="Profile pic" src={image8} />
								<p className="placeholder">
									Fight Against Lymelight: A Subcampaign for Lyme Disease
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
