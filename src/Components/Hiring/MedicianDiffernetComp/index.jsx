import React from "react";
import "./style.scss";

import rescseherpic from "../../../Assets/Hiring/rescseherpic.png";

// import { useNavigate } from "react-router-dom";

const MedicianeDiffrentComp = () => {
	return (
		<div className="mediciane-different-conatiner">
			<div className="mediciane_diffrent_comp_left">
				<div className="comp_left_first_item">
					<div className="medicine_text">
            Let’s <span>make medicine different </span>
					</div>
					<div className="comp_left_text_box">
            Achieving our bold mission requires a diverse team across
            disciplines (scientists, engineers, and more!), experiences, and
            expertise.
					</div>
				</div>
				<button className="meet_our_tem_btn">
					<div>Meet our team</div>
				</button>
			</div>
			<div className="medicaine_different_right_box">
				<img src={rescseherpic} alt="rescseherpic" />
			</div>
		</div>
	);
};
export default MedicianeDiffrentComp;
