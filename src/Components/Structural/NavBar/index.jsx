import React from "react";
import "./style.css";
import Logo from "../../../Assets/Icons/Frame 629711.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [menu, setMenu] = useState("navbar-links-container");
	const [buttonMenuName, setbuttonMenuName] = useState("=");
	const navigate = useNavigate();
	// new function:
	const handleScroll = () => {
		// find current scroll position
		const currentScrollPos = window.pageYOffset;

		// set state based on location info (explained in more detail below)
		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 0) ||
				currentScrollPos < 10
		);

		// set state to new scroll position
		setPrevScrollPos(currentScrollPos);
	};
	function Openmenu() {
		if (menu === "hidden") {
			setMenu("navbar-links-container");
			setbuttonMenuName("Close");
		} else {
			setMenu("hidden");
			setbuttonMenuName("=");
		}
	}
	// new useEffect:
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	useEffect(() => {
		if (window.innerWidth < 1050) {
			setMenu("hidden");
			setbuttonMenuName("=");
		}
	}, []);

	return (
		<>
			<div
				className="navBar-container"
				style={{ top: visible ? "0" : "-65px" }}
			>
				<div className="navBar-logo-wrapper">
					<img
						className="navBar-logo"
						src={Logo}
						alt="prepaire logo"
						onClick={() => {
							navigate("/");
						}}
					/>
				</div>

				<div className="navbar-action-container">
					<div className={menu}>
						<Link
							className="appstore-link-navbar"
							to="https://app.prepaire.com:5067/#/marketplace"
							// to="https://prepaire-staging.vercel.app/#/marketplace"
						>
							Appstore
						</Link>
						<a
							onClick={() => {
								navigate("/developers");
								// Openmenu();
							}}
						>
							{" "}
							Developers
						</a>
						<a
							onClick={() => {
								navigate("/mission");
								// Openmenu();
							}}
						>
							Mission
						</a>
						<a
							onClick={() => {
								navigate("/biotune");
								// Openmenu();
							}}
						>
							Biotune
						</a>
						<a
							onClick={() => {
								navigate("/crowdfunding");
								// Openmenu();
							}}
						>
							Crowdfunding
						</a>
						<HashLink to={"/#news"} smooth={true}>
							News
						</HashLink>
						<HashLink to={"/#contact"} smooth={true}>
							Contact
						</HashLink>
					</div>
					<div className="navBar-button-containers">
						<Link
							className="button-secondary"
							to="https://app.prepaire.com:5067/#/login"
							// to="https://prepaire-staging.vercel.app/#/login"
						>
							Log in
						</Link>
					</div>
				</div>

				<button className="button-secondary" type="button" onClick={Openmenu}>
					{buttonMenuName}
				</button>
			</div>
		</>
	);
};
export default NavBar;
