import React, { useEffect, useState } from "react";
import "./style.scss";
import publication1 from "../../../Assets/Publications/publication-main-img.svg";
import publicationSmall from "../../../Assets/Publications/publication-small-screen.svg";
// import publication2 from "../../../Assets/Publications/prepaire-logo.svg";
// import publication2 from "../../../Assets/Publications/newlogo.svg";
import publication3 from "../../../Assets/Publications/einpresswire.png";
import publication4 from "../../../Assets/Publications/ktms.png";
import publication5 from "../../../Assets/Publications/irena-building.jpeg";

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

	const handleLink = (link) => {
		window.open(link);
	};

	return (
		<div className="publication-container">
			<div className="publication-text-container">
				<p className="publication-tittle">
					Publications&nbsp;&
					<span className="color-inlineVariation-blue">Press</span>
				</p>
			</div>
			<div
				className="publication-content-upper-container"
				onClick={() => {
					handleLink(
						"https://noah-news.com/us/en/health/2024/01/18/scottish-firm-chemify-collaborates-with-prepaire-labs-to-develop-non-addictive-opioids"
					);
				}}
			>
				<div className="publication-image">
					<img
						src={windowWidth >= 1256 ? publication1 : publicationSmall}
						alt="publication-1"
						className="publication-image-1"
					/>
				</div>
				<div className="publication-image-1">
					<div className="publication-1-text-container">
						<p className="publication-press-name">PREPAIRE LABS</p>
						<p className="publication-press-title">
							Chemify Partners with Prepaire Labs to Apply Ground-breaking
							Chemistry AI Robotics to Radically Accelerate the Discovery of
							Non-Addictive Opioids
						</p>
						<p className="publication-press-date">January 18, 2024</p>
					</div>
				</div>
			</div>
			<div className="publication-lower-container">
				<div
					className="small-publication-container"
					onClick={() => {
						handleLink(
							"https://www.einpresswire.com/shareable-preview/9bicFvh3eOlMv1FEWavuoQ"
						);
					}}
				>
					<div className="publication-2-img-container">
						<img src={publication5} className="img-responsive2" />
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">einpresswire</p>
						<p className="publication-small-title">
							Prepaire Labs announced a groundbreaking initiative to achieve
							carbon neutrality.
						</p>
						<p className="publication-small-date">January 04, 2024</p>
					</div>
				</div>
				<div
					className="small-publication-container"
					onClick={() => {
						handleLink(
							"https://kalkinemedia.com/news/world-news/prepaire-labs-and-syndesis-announce-strategic-partnership-to-transform-global-health-outcomes"
						);
					}}
				>
					<div className="publication-2-img-container">
						<img src={publication3} className="img-responsive" />
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">einpresswire</p>
						<p className="publication-small-title">
							Prepaire Labs Acquires State-of-the-Art 3D Bioprinter from CELLINK
							for New UAE Research Lab
						</p>
						<p className="publication-small-date">June 05, 2023</p>
					</div>
				</div>
				<div
					className="small-publication-container"
					onClick={() => {
						handleLink(
							"https://www.ktsm.com/business/press-releases/ein-presswire/638930046/prepaire-labs-receives-two-patents-for-new-anti-viral-drug/"
						);
					}}
				>
					<div className="publication-2-img-container">
						<img
							src={publication4}
							className="img-responsive"
							style={{ height: "100%" }}
						/>
					</div>
					<div className="publication-2-content-container">
						<p className="publication-small-press-name">KTMS</p>
						<p className="publication-small-title">
							Prepaire Labs™ Receives Two Patents for New Anti-Viral Drug
						</p>

						<p className="publication-small-date" style={{ marginTop: "6%" }}>
							June 12, 2023
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Publications;
