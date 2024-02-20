import React, { useState } from "react";
import "./style.scss";

import ArrowIcon from "../../../Assets/Hiring/arrow-icon.svg";

// import { useNavigate } from "react-router-dom";

const Openposition = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="open-position-conatiner">
			<div className="heading-box-position">
				<div className="heading-left_box">
					<h2>
            Open <span> Positions </span>
					</h2>
					<p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut{" "}
					</p>
				</div>
				<div className="heading-right_box">
					<select
						className="selectOption"
						value={selectedOption}
						onChange={handleSelectChange}
					>
						<option value="">All Department</option>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</select>
				</div>
			</div>
			<div className="main-content-position">
				<div className="position_open">
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
                Senior / Lead Computer Vision/Clinical ML Scientist
							</div>
							<div className="positon_first-text">Abu Dhabi, UAE</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
              Senior UX Designer
							</div>
							<div className="positon_first-text">Remote Worldwide</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
				</div>
				<div className="position_open">
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
                Senior / Lead Computer Vision/Clinical ML Scientist
							</div>
							<div className="positon_first-text">Abu Dhabi, UAE</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
              Senior UX Designer
							</div>
							<div className="positon_first-text">Remote Worldwide</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
				</div>
				<div className="position_open">
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
                Senior / Lead Computer Vision/Clinical ML Scientist
							</div>
							<div className="positon_first-text">Abu Dhabi, UAE</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
					<div className="positon_open_first">
						<div className="positon_open_first_left">
							<div className="positon_first-heading">
              Senior UX Designer
							</div>
							<div className="positon_first-text">Remote Worldwide</div>
						</div>
						<div className="postion_open_first_right">
							<div className="view_pos">View</div>
							<img src={ArrowIcon} alt="arrow" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Openposition;
