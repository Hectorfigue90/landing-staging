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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, se Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Deleniti veritatis corrupti quae
						</div>
						<div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
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
