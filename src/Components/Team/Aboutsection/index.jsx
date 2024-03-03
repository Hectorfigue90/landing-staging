import React from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import GlobalIcon from "../../../Assets/Team/global-icon.svg";

const Aboutprepaire = () => {
	return (
		<div className="About-prepaire-container">
			<div className="preapire_about_image">
				<div className="remote-pos-text">
					<div className="img-section">
						<img src={GlobalIcon} alt="global-icon" />
						<div className="global_pos_text">
							12+ <span className="remote"> Remote positions open </span>
						</div>
					</div>
				</div>
			</div>
			<div className="prepaire_about_section_box">
				<div className="text_section">
					<div className="prepaire_text-box-first">
						About <span>Prepaire</span>
					</div>
					<div className="prepaire_text_box_second">
						<div>
							Prepaire Labs is a pioneering healthcare technology company
							focused on revolutionizing drug discovery and precision medicine.
							Through the integration of deep learning and biology, Prepaire
							Labs builds predictive models grounded in genetic, phenotypic, and
							clinical data. These models form a view to the underlying
							architecture and biology of diseases. Prepaire Labs utilizes
							patient-derived induced pluripotent stem cells (iPSCs), genome
							editing, high-content cellular phenotyping, and machine learning
							to create in vitro disease models that optimize genetics,
							cell-type, environment, and multidimensional data collection for
							increased predictability of human clinical outcomes. A
							state-of-the-art BSL3 lab is opening in May 2024, located at
							Masdar City, Abu Dhabi, UAE. This will serve as the new fully
							automated LAAS (Lab As A Service) hub and provide clinical trials
							on a chip using latest microfluidic devices combined with the
							ability to print organoid bio-networks.
						</div>
					</div>
				</div>
				<button className="open_role">
					<div>View open roles</div>
				</button>
			</div>
		</div>
	);
};
export default Aboutprepaire;
