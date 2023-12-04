import React from "react";
import "./style.scss";
import img from "../../../Assets/CrowdfundingLanding/whyCrowd.png";

function CrowdWhy() {
	return (
		<div className="crowdfunding-why-container">
			<img alt=" crowd mopving in one direction" src={img} />
			<div className="crowdfunding-whyText-container">
				<div>
					<h1>Why Prepaire </h1>
					<h1 className="blue">Community Fund?</h1>
				</div>
				<div className="crowdfunding-heroP-container">
					<p>
						In the world of medical research, independent researchers and SMEs
						often face significant challenges in securing funding for their
						promising drug candidates. Traditional funding sources often favor
						established institutions and large pharmaceutical companies, leaving
						these smaller players without the resources they need to advance
						their research.
					</p>
					<p>
						That&apos;s where Prepaire Community Fund comes in. We believe that
						every researcher with a promising drug candidate deserves a chance
						to make a difference. By providing financial support and guidance,
						we empower these innovators to bring their breakthroughs to the
						world.
					</p>
				</div>
				<div className="crowfunding-heroButton-container">
					<button type="button" className="button-blue">
						Start donating
					</button>
					<button type="button">Create campaign</button>
				</div>
			</div>
		</div>
	);
}

export default CrowdWhy;
