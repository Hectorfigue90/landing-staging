import React, { useState } from "react";
import "./style.scss";
import logo1 from "../../../Assets/Partners/Drugbank_logo.svg";
// import logo2 from "../../../Assets/Partners/chemify_logo_wmohln 1.svg";
// import logo3 from "../../../Assets/Partners/syndesis 1.svg";
import logo4 from "../../../Assets/Partners/Elsevier 1.svg";
import logo5 from "../../../Assets/Partners/nvidia-seeklogo.com 1.svg";
import logo6 from "../../../Assets/Partners/cellink_bico_w 1.svg";
import logo7 from "../../../Assets/Partners/Amazon_Web_Services_Logo - Copy 1.svg";
// import logo8 from "../../../Assets/Partners/download 1.svg";
// import logo9 from "../../../Assets/Partners/image 380.svg";
import logo10 from "../../../Assets/Partners/Capa 2.svg";
// import logo11 from "../../../Assets/Partners/image 379.svg";
import logo12 from "../../../Assets/Partners/MGI-new-logo-1024x455 1.png";
import logo13 from "../../../Assets/Partners/Group.svg";
// import logo14 from "../../../Assets/Partners/download (1) 1.svg";
// import logo15 from "../../../Assets/Partners/image 384.svg";
import logo16 from "../../../Assets/Partners/image 382 1.png";
import logo17 from "../../../Assets/Partners/Harvard_University_logo 1.svg";
import logo18 from "../../../Assets/Partners/Frame 629635.svg";
import logo19 from "../../../Assets/Partners/logo-TelesisBio-RGB 1.svg";
import chemifyLogo from "../../../Assets/Partners/chemify_logo.svg";
// import telsisBio from "../../../Assets/Partners/telesisBio.svg";
import healthnieers from "../../../Assets/Partners/healthnieers 1.png";
import botspot from "../../../Assets/Partners/botspot.png";
import chemspeed from "../../../Assets/Partners/chemspeed.png";
import azenta from "../../../Assets/Partners/azenta.png";
import temper from "../../../Assets/Partners/tempers.png";
import emulate from "../../../Assets/Partners/emulate.png";

const Partners = () => {
	const [contHeight, setHeight] = useState("200px");
	const [buttonText, setButtonText] = useState("Show All (14)");

	function showAll() {
		if (buttonText === "Show All (14)") {
			setHeight("fit-content");
			setButtonText("Collapse");
		} else {
			setHeight("200px");
			setButtonText("Show All (14)");
		}
	}
	return (
		<div className="partners-container">
			<div className="partners-text-container">
				<p className="partners-tittle">
					Our<span className="color-inlineVariation-blue">Partners</span>
				</p>
				<p>
					Our partners are at the forefront of innovation, driving advancements
					that transform healthcare.
				</p>
			</div>
			<div className="partnes-card-conatainer" style={{ height: contHeight }}>
				<div className="partners-card">
					<img src={logo10} className="partners-logo"></img>
				</div>
				{/* <div className="partners-card">
					<img src={logo2} className="partners-logo"></img>
				</div> */}
				<div className="partners-card">
					<img src={logo17} className="partners-logo"></img>
				</div>
				<div className="partners-card">
					<img src={logo4} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={chemifyLogo} className="partners-logo-b"></img>
				</div>

				<div className="partners-card">
					<img src={logo5} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={logo6} className="partners-logo"></img>
				</div>
				<div className="partners-card">
					<img src={logo7} className="partners-logo-b"></img>
				</div>
				<div className="partners-card">
					<img src={logo13} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={logo1} className="partners-logo"></img>
				</div>
				{/* <div className="partners-card">
					<img src={logo11} className="partners-logo"></img>
				</div> */}
				<div className="partners-card">
					<img src={logo12} className="partners-logo"></img>
				</div>

				{/* <div className="partners-card">
					<img src={logo8} className="partners-logo"></img>
				</div>
				<div className="partners-card">
					<img src={logo14} className="partners-logo"></img>
				</div> */}
				{/* <div className="partners-card">
					<img src={logo15} className="partners-logo"></img>
				</div> */}
				<div className="partners-card">
					<img src={logo16} className="partners-logo-b"></img>
				</div>

				<div className="partners-card">
					<img src={logo18} className="partners-logo"></img>
				</div>
				<div className="partners-card">
					<img src={logo19} className="partners-logo"></img>
				</div>
				<div className="partners-card">
					<img src={healthnieers} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={botspot} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={chemspeed} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={azenta} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={temper} className="partners-logo"></img>
				</div>

				<div className="partners-card">
					<img src={emulate} className="partners-logo"></img>
				</div>
			</div>
			<div className="partner-button-wrapper">
				<button className="button-secondary" onClick={showAll}>
					{buttonText}
				</button>
			</div>
		</div>
	);
};
export default Partners;
