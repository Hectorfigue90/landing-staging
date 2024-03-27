import React from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import lee from "../../../Assets/Team/ProfilePicture/advisors/Pics.png";

import lee from "../../../Assets/Team/ProfilePicture/advisors/lee.png";

// import ming from "../../../Assets/Team/ProfilePicture/advisors/Pics-1.png";
import ming from "../../../Assets/Team/ProfilePicture/advisors/min.png";

// import zaki from "../../../Assets/Team/ProfilePicture/advisors/Pics-2.png";
import zaki from "../../../Assets/Team/ProfilePicture/advisors/zaki.png";

// import moore from "../../../Assets/Team/ProfilePicture/advisors/Pics-3.png";
import moore from "../../../Assets/Team/ProfilePicture/advisors/moore.png";
// import steve from "../../../Assets/Team/ProfilePicture/advisors/Pics-4.png";

// import abdulla from "../../../Assets/Team/ProfilePicture/advisors/Pics-5.png";

const PrepaireAdvisors = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object

	return (
		<div
			className="prepaire-team-container"
			//   style={{ backgroundColor: "#1A1C2F" }}
		>
			<div className="talented_team">
				<div className="talented-tem-text">
					{/* <span style={{ color: "white" }}> Our Advisors</span> */}
					<span>Prepaire’s Advisors</span>
				</div>
			</div>

			<div className="photo-section2">
				<div className="photo-section-item">
					<div className="photo-box">
						<div className="photo">
							<img src={lee} alt="carl" />
						</div>
						<div className="name2">Prof. Lee Cronin</div>
						<div className="designation2">Advisor</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={ming} alt="carl" />
						</div>
						<div className="name2">Prof. Min S. Park</div>
						<div className="designation2">Advisor</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={zaki} alt="carl" />
						</div>
						<div className="name2">Dr. Miray Zaki</div>
						<div className="designation2">Advisor</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={moore} alt="carl" />
						</div>
						<div className="name2">Alasdair Moore</div>
						<div className="designation2">Advisor</div>
					</div>
					{/* <div className="photo-box">
            <div className="photo">
              <img src={steve} alt="carl" />
            </div>
            <div className="name2">Steve Carroll</div>
            <div className="designation2">Advisor</div>
          </div>
          <div className="photo-box">
            <div className="photo">
              <img src={abdulla} alt="carl" />
            </div>
            <div className="name2">Abdulla Al Mansoori</div>
            <div className="designation2">Advisor</div>
          </div> */}
				</div>
			</div>
		</div>
	);
};
export default PrepaireAdvisors;
