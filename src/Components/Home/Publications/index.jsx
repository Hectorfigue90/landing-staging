import React, {useEffect, useState} from "react";
import "./style.scss";
import publication1 from "../../../Assets/Publications/publication1.png";
import publicationSmall from "../../../Assets/Publications/publication-small-screen.svg";
import publication2 from "../../../Assets/Publications/publication-image-2.svg";
import publication3 from "../../../Assets/Publications/publication-image-3.png";
import publication4 from "../../../Assets/Publications/publication-image-4.png";

const Publications = () => {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="publication-container">
			<div className="publication-text-container">
				<p className="publication-tittle">
					Publications&nbsp;&<span className="color-inlineVariation-blue">Press</span>
				</p>
			</div>
			<div className="publication-content-upper-container">
				<div className='publication-image'>
					<img src={windowWidth >= 1256 ? publication1: publicationSmall} alt="publication-1" className="publication-image-1" />
				</div>
				<div className="publication-image-1">
					<div className="publication-1-text-container">
						<p className="publication-press-name">PRESS NAME GOES HERE</p>
						<p className="publication-press-title">
							Chemify Partners with Prepaire Labs to Apply Ground-breaking Chemistry AI Robotics to Radically Accelerate the Discovery of Non-Addictive Opioids
						</p>
						<p className="publication-press-date">
							January 18, 2024
						</p>
					</div>
				</div>
			</div>
			<div className="publication-lower-container">
				<div className="small-publication-container">
					<div className="publication-2-img-container">
						<img src={publication2} className="img-responsive" />
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">Kalkine media</p>
						<p className="publication-small-title">Prepaire Labs and Syndesis Announce Strategic Partnership to Transform Global Health Outcomes</p>
						<p className="publication-small-date">August 14, 2023</p>
					</div>
				</div>
				<div className="small-publication-container">
					<div className="publication-2-img-container">
						<img src={publication3} className="img-responsive" />
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">einpresswire</p>
						<p className="publication-small-title">Prepaire Labs Acquires State-of-the-Art 3D Bioprinter from CELLINK for New UAE Research Lab</p>
						<p className="publication-small-date">June 05, 2023</p>
					</div>
				</div>
				<div className="small-publication-container">
					<div className="publication-2-img-container">
						<img src={publication4} className="img-responsive" />
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">KTMS</p>
						<p className="publication-small-title">Prepaire Labs™ Receives Two Patents for New Anti-Viral Drug</p>
						<p className="publication-small-date">June 12, 2023</p>
					</div>
				</div>
			</div>


		</div>
	);
};

export default Publications;
