import React from "react";
import "./style.scss";
import imgA from "../../../Assets/CrowdfundingLanding/BoxingGlove.png";
import imgB from "../../../Assets/CrowdfundingLanding/f4cureLogo.png";

function FeaturedCampaings() {
	return (
		<div className="crowdfunding-featured-container">
			<h2 className="crowdfunding-tittlemini-container">Featured Campaigns</h2>

			<div className="crowdfunding-featuredcontent-container">
				<img alt="glove against drugs" src={imgA} />
				<div className="crowdfunding-featureText-container">
					<div className="crowdfunding-tittle-container">
						<img alt="fight 4 cure emblem" src={imgB} />
						<h1>
							Join the Solution for Opioid Addiction: Your Donation is another
							Knock-Out against the Crisis
						</h1>
					</div>
					<div className="crowdfunding-innercontent-container">
						<div className="crowdfunding-money-container">
							<div>
								<h2>$ 0</h2> <h3>of $30M</h3>
							</div>
							<div className="crowdfunding-loadinBar-outter" />
							<h3>Expected release: January 6</h3>
						</div>
						<h3 className="crowdfunding-tag">Research & Development</h3>
						<p>
							Our initiative stands at the intersection of technology and
							healing, using advanced AI to accelerate drug repurposing for
							Opioid Use Disorder (OUD). We sift through FDA-approved
							medications with advence deep learning algorithms, identifying
							those that can potentially correct the neurological disruptions
							caused by opioids. This AI enhancement speeds the process from
							discovery to clinical trial and pinpoints the most promising
							candidates. The impact echoes in past OUD repurposing successes
							like Naltrexone, now providing hope to those battling this
							epidemic. These victories highlight the transformative potential.
							Your support empowers expanding these AI-driven trials, bringing
							life-altering OUD treatments to those in need more quickly. Join
							us in combining innovation and tenacity to turn the tide of this
							crisis.
						</p>
						<div className="crowfunding-heroButton-container">
							<button type="button" className="button-blue" onClick>
								Learn more
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedCampaings;
