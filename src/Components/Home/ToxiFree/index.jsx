import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import toxifreeIcon from "../../../Assets/discoverBanner/toxifree-icon.svg";
// import pillIcon from "../../../Assets/discoverBanner/pill.png";

const ToxiFree = () => {
	const navigate = useNavigate();

	return (
		<div className="discoverMainCard-container">
			<div className="text-frame-discoverMainCards">
				<div className="banner-heading">
					<img src={toxifreeIcon} alt="toxifree" />
					{/* <h2>The Toxifree(tm) app to combat</h2> */}
					<h2>The Toxifree&trade; app to combat</h2>
					<h2 className="blue">drug addiction</h2>
				</div>
				<p>
					An app introducing a groundbreaking approach to detoxifying harmful
					drugs, such as opioids and synthetics, by targeting their interaction
					with specific cell receptors. This innovative process enables the
					precise customization of peptides, promising tailored therapies and
					vaccines.
				</p>
				<button
					className="button-primary"
					type="button"
					onClick={() =>
						navigate("https://app.prepaire.com:5067/#/marketplace")
					}
				>
					Check it out now!
				</button>
			</div>
			{/* <div className="img-side">
				<img src={pillIcon} alt="pill" />
			</div> */}
			<div className="new-tag">{/* <img src={newTag} alt="pill" /> */}</div>
		</div>
	);
};
export default ToxiFree;
