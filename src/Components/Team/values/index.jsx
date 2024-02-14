import React from "react";
import "./style.scss";
import Boximage from "../../../Assets/Team/Boximage1.svg";
import Boximage2 from "../../../Assets/Team/Boximage2.svg";
import Boximage3 from "../../../Assets/Team/BoxImage3.svg";

const OurValuesComponent = () => {
	return (
		<div className="ourvalues-conatiner-main">
			<h1>
        Our <span>Values</span>
			</h1>
			<div className="ourvalues-box-container">
				<div className="box-container-child">
					<div className="box-image-container">
						<img src={Boximage} alt="box image" />
					</div>

					<div className="box-text-conatiner">
						<h1> Custoumer List</h1>
						<p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. D
						</p>
					</div>
				</div>
				<div className="box-container-child">
					<div className="box-image-container">
						<img src={Boximage2} alt="box image" />
					</div>

					<div className="box-text-conatiner">
						<h1> Diversity</h1>
						<p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
						</p>
					</div>
				</div>
				<div className="box-container-child">
					<div className="box-image-container">
						<img src={Boximage3} alt="box image" />
					</div>

					<div className="box-text-conatiner">
						<h1>Excellence</h1>
						<p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. D
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurValuesComponent;
