import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/Biotune/biotune.png";

const Biotune = () => {
	const navigate = useNavigate();
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="biotuneSoon-container">
			<img src={img}></img>
			<div className="biotuneSoon-content-container">
				<h2>
					Coming Soon: <br />
					Biotune Clinic –
					<span className="color-inlineVariation-blue">
						Elevating Wellness to New Heights
					</span>
				</h2>
				<h3>
					Revolutionizing Personalized Healthcare Through Cutting Edge
					Technology and Groundbreaking Research. Embark on Your Journey to
					Optimal Wellbeing Today.
				</h3>
				<p>
					Biotune Clinic transcends traditional healthcare models to serve as a
					sanctuary for proactive health optimization. Armed with
					state-of-the-art technologies like PET/CT/Photoacoustic scanning,
					Whole Genome Sequencing, High Performance Computing, 3D Body Scanning,
					and a specialized Biobank unit, we offer a new paradigm in
					personalized wellness solutions.
				</p>
				<button
					className="button-primary"
					onClick={() => {
						navigate("/");
					}}
				>
					Back to homepage
				</button>
			</div>
		</div>
	);
};
export default Biotune;
