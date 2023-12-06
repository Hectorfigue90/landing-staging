import React from "react";
import "./style.scss";
import img from "../../../Assets/CrowdfundingLanding/subscription-image.png";

function SubscriptionModal() {
	return (
		<div className="subscriptionModal-bg">
			<div className="subcriptionModal-container">
				<div className="subcriptionModal-close-container">
					<button className="button-secondary">x</button>
				</div>
				<div className="supscriptionModal-contentContainer">
					<div>
						<div className="subcriptionModal-inner-continer">
							<div className="subcriptionModal-tittle-container">
								<h1>Be the First to Know </h1>
							</div>
							<p>
								If you&apos;re eager to be among the first to explore this
								groundbreaking development, you&apos;re in the right place. Sign
								up now to receive exclusive updates and early access.
							</p>
							<div className="subcriptionModal-form-container">
								<div className="subcriptionModal-input-container">
									<label>Full name</label>
									<input placeholder="Your name" />
								</div>
								<div className="subcriptionModal-input-container">
									<label>Email Address</label>
									<input placeholder="Your email" />
								</div>

								<div className="subcriptionModal-input-container">
									<label>Your Interest Area</label>
									<input placeholder="Write interest" />
								</div>
							</div>
							<div className="agree-container">
								<input type="checkbox" />
								<p>
									Yes, I would like to receive updates about Prepaire Labs and
									its latest developments.
								</p>
							</div>

							<button className="button-primary">Notify me when ready!</button>
							<p>
								By submitting you agree to the Terms of service and Privacy
								Policy
							</p>
						</div>
						<p className="subcriptionModal-thanks">
							Thank you for being a part of this exciting journey with Prepaire
							Labs. We can &apos;t wait to embark on this adventure with you!
						</p>
					</div>
					<div>
						<div className="subcriptionModal-tittle-container">
							<h1>Together, We Can </h1>

							<h1 className="blue">Make a Difference </h1>
						</div>
						<p>
							If you&apos;re eager to be among the first to explore this
							groundbreaking development, you&apos;re in the right place. Sign
							up now to receive exclusive updates and early access.
						</p>
						<img alt="chill picture" src={img} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default SubscriptionModal;
