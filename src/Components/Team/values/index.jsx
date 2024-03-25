import React from "react";
import "./style.scss";
import Boximage from "../../../Assets/Team/Boximage1.svg";
import Boximage2 from "../../../Assets/Team/Boximage2.svg";
import Boximage3 from "../../../Assets/Team/BoxImage3.svg";

const OurValuesComponent = () => {
	return (
		<div className="ourvalues-conatiner-main">
			<div className="core-value-heading">
				<h1>
          The core values of <span>Prepaire</span>
				</h1>{" "}
			</div>
			<div className="ourvalues-box-container">
				<div className="box-container-child">
					<div className="box-image-container">
						<img src={Boximage} alt="box image" />
					</div>

					<div className="box-text-conatiner">
						<h1> Customer First</h1>
						<p>
              We understand that your health journey is deeply personal. At
              Prepaire Labs, we prioritize your needs, concerns, and goals above
              all else. Our focus is on building long-lasting relationships
              founded on trust, transparency, and a relentless drive to help you
              achieve your best possible health outcomes.
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
              A multifaceted approach to healthcare demands a diversity of
              perspectives. Our team fosters a culture of inclusion, where
              individuals from various backgrounds, experiences, and skillsets
              are celebrated. This rich tapestry of talent empowers us to
              innovate, push boundaries, and develop solutions that truly cater
              to the diverse needs of our customers.
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
              We set the bar high. Prepaire Labs is committed to delivering
              exceptional care fueled by unwavering dedication to research,
              precision, and continuous improvement. Our pursuit of excellence
              never ends, ensuring you always have access to the most advanced,
              personalized healthcare solutions available.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurValuesComponent;
