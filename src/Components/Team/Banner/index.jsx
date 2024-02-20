import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const BannerComponent = () => {
	const navigate = useNavigate();
	return (
		<div className="banner-container">
			<div className="banner-content">
				<div className="banner-text-container">
					<div className="banner-title-text">
						<h1>We’re changing the </h1>
						<h2>future of medicine</h2>
					</div>

					<p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
					</p>
				</div>
				<button
					className="banner-viewRoles-button"
					onClick={() => {
						navigate("/hiring");
						// Openmenu();
					}}
				>
					<div>View Open Roles</div>
				</button>
			</div>
			<div className="banner-imageConatiner"></div>
		</div>
	);
};

export default BannerComponent;
