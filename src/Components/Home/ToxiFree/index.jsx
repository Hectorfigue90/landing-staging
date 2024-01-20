import React from "react";

import "./style.scss";
import toxifreeIcon from "../../../Assets/discoverBanner/toxifree-icon.svg";
import { Link } from "react-router-dom";
// import pillIcon from "../../../Assets/discoverBanner/pill.png";

const ToxiFree = () => {
	return (
		<div className="discoverMainCard-container">
			<div className="text-frame-discoverMainCards">
				<div className="banner-heading">
					<img src={toxifreeIcon} alt="toxifree" />
					<h2>Toxifree the app to combat</h2>
					<h2 className="blue">drug addiction</h2>
				</div>
				<p>
					An app introducing a groundbreaking approach to detoxifying harmful
					drugs, such as opioids and synthetics, by targeting their interaction
					with specific cell receptors. This innovative process enables the
					precise customization of peptides, promising tailored therapies and
					vaccines.
				</p>
				<Link
					className="button-primary"
					to="https://app.prepaire.com:5067/#/marketplace"
				>
					Check it out now!
				</Link>
			</div>
			{/* <div className="img-side">
				<img src={pillIcon} alt="pill" />
			</div> */}
			<div className="new-tag">{/* <img src={newTag} alt="pill" /> */}</div>
		</div>
	);
};
export default ToxiFree;
