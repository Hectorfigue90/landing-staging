import React, { useState } from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import PrepaireLogo from "../../../Assets/Team/prepire-logo.svg";
import PrepaireLogo from "../../../Assets/Team/prepairelogo.svg";
// import a from "../../../Assets/Team/ProfilePicture/Frame 2085660924.png";
// import b from "../../../Assets/Team/ProfilePicture/Frame 2085660924-1.png";
// import c from "../../../Assets/Team/ProfilePicture/Frame 2085660924-2.png";
// import d from "../../../Assets/Team/ProfilePicture/Frame 2085660924-3.png";
// import e from "../../../Assets/Team/ProfilePicture/Frame 2085660924-4.png";
// import f from "../../../Assets/Team/ProfilePicture/Frame 2085660924-5.png";
// import g from "../../../Assets/Team/ProfilePicture/Frame 2085660924-6.png";
// import h from "../../../Assets/Team/ProfilePicture/Frame 2085660924-7.png";
// import i from "../../../Assets/Team/ProfilePicture/Frame 2085660924-8.png";
// import j from "../../../Assets/Team/ProfilePicture/Frame 2085660924-9.png";
// import k from "../../../Assets/Team/ProfilePicture/Frame 2085660924-10.png";
// import l from "../../../Assets/Team/ProfilePicture/Frame 2085660924-11.png";
// import m from "../../../Assets/Team/ProfilePicture/Frame 2085660924-12.png";
// import n from "../../../Assets/Team/ProfilePicture/Frame 2085660924-13.png";
// import o from "../../../Assets/Team/ProfilePicture/Frame 2085660924-14.png";
// import p from "../../../Assets/Team/ProfilePicture/Frame 2085660924-15.png";

// import q from "../../../Assets/Team/ProfilePicture/Frame 2085660924-16.png";
// import r from "../../../Assets/Team/ProfilePicture/Frame 2085660924-17.png";
// import s from "../../../Assets/Team/ProfilePicture/Frame 2085660924-18.png";
// import t from "../../../Assets/Team/ProfilePicture/Frame 2085660924-19.png";
// import u from "../../../Assets/Team/ProfilePicture/Frame 2085660924-20.png";
// import v from "../../../Assets/Team/ProfilePicture/Frame 2085660924-21.png";
// import w from "../../../Assets/Team/ProfilePicture/Frame 2085660924-22.png";
// import x from "../../../Assets/Team/ProfilePicture/Frame 2085660924-23.png";
// import y from "../../../Assets/Team/ProfilePicture/Frame 2085660924-24.png";
// import z from "../../../Assets/Team/ProfilePicture/Frame 2085660924-25.png";
// import aa from "../../../Assets/Team/ProfilePicture/Frame 2085660924-26.png";
// import bb from "../../../Assets/Team/ProfilePicture/Frame 2085660924-27.png";
// import cc from "../../../Assets/Team/ProfilePicture/Frame 2085660924-28.png";
// import dd from "../../../Assets/Team/ProfilePicture/Frame 2085660924-29.png";
// import ee from "../../../Assets/Team/ProfilePicture/Frame 2085660924-30.png";
// import ff from "../../../Assets/Team/ProfilePicture/Frame 2085660924-31.png";

import Adam from "../../../Assets/Team/ProfilePicture/newProfilePic/adam.png";
import ahamad from "../../../Assets/Team/ProfilePicture/newProfilePic/ahamd.png";
import amir from "../../../Assets/Team/ProfilePicture/newProfilePic/amir.png";
import andrew from "../../../Assets/Team/ProfilePicture/newProfilePic/andrew.png";
import archna from "../../../Assets/Team/ProfilePicture/newProfilePic/archna.png";
import asma from "../../../Assets/Team/ProfilePicture/newProfilePic/asma.png";
import brent from "../../../Assets/Team/ProfilePicture/newProfilePic/brent.png";
import carl from "../../../Assets/Team/ProfilePicture/newProfilePic/carl.png";
import daniel from "../../../Assets/Team/ProfilePicture/newProfilePic/daniel.png";
import dmytro from "../../../Assets/Team/ProfilePicture/newProfilePic/dmytro.png";
// import eman from "../../../Assets/Team/ProfilePicture/newProfilePic/eman.png";
import fred from "../../../Assets/Team/ProfilePicture/newProfilePic/fred.png";
import hector from "../../../Assets/Team/ProfilePicture/newProfilePic/hector.png";
import ines from "../../../Assets/Team/ProfilePicture/newProfilePic/ines.png";
// import jahra from "../../../Assets/Team/ProfilePicture/newProfilePic/jahra.png";
import joseph from "../../../Assets/Team/ProfilePicture/newProfilePic/joseph.png";
import karim from "../../../Assets/Team/ProfilePicture/newProfilePic/karim.png";
import kunj from "../../../Assets/Team/ProfilePicture/newProfilePic/kunj.png";
import lawrence from "../../../Assets/Team/ProfilePicture/newProfilePic/lawrence.png";
// import maheide from "../../../Assets/Team/ProfilePicture/newProfilePic/maheide.png";
// import mahsa from "../../../Assets/Team/ProfilePicture/newProfilePic/mahsa.png";
import malaz from "../../../Assets/Team/ProfilePicture/newProfilePic/malaz.png";
import manar from "../../../Assets/Team/ProfilePicture/newProfilePic/manar.png";
import milad from "../../../Assets/Team/ProfilePicture/newProfilePic/milad.png";
// import mohmad from "../../../Assets/Team/ProfilePicture/newProfilePic/mohmad.png";
import muhmmad from "../../../Assets/Team/ProfilePicture/newProfilePic/muhmmad.png";
import narges from "../../../Assets/Team/ProfilePicture/newProfilePic/narges.png";
import oliver from "../../../Assets/Team/ProfilePicture/newProfilePic/oliver.png";
// import rob from "../../../Assets/Team/ProfilePicture/newProfilePic/rob.png";
import sarah from "../../../Assets/Team/ProfilePicture/newProfilePic/sarah.png";
import tyler from "../../../Assets/Team/ProfilePicture/newProfilePic/tyler.png";
import yacine from "../../../Assets/Team/ProfilePicture/newProfilePic/yacine.png";
import vicent from "../../../Assets/Team/ProfilePicture/newProfilePic/vicent.png";
import vivek from "../../../Assets/Team/ProfilePicture/newProfilePic/vivek.png";
import Atefeh from "../../../Assets/Team/ProfilePicture/newProfilePic/Atefeh.png";

const Prepaireteam = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object
	//   const [button, setButton] = useState("View All");
	// const [heigh, setHeigh] = useState("calc((100vw) * 1.1)");
	//   function viewAll() {
	//     if (button === "View All") {
	//       setButton("Collapse");
	//       setHeigh("100%");
	//     } else {
	//       setButton("View All");
	//       setHeigh("calc((100vw) * 1.1)");
	//     }
	//   }

	const [expanded, setExpanded] = useState(false); // Using boolean for simplicity

	function toggleView() {
		setExpanded(!expanded);
	}

	return (
		<div className="prepaire-team-container-all">
			<div className="talented_team">
				<div className="prepire-logo">
					<img src={PrepaireLogo} alt="logo" />
				</div>
				<div className="talented-tem-text">
          Our <span> talented team </span>
				</div>
			</div>

			{/* <div className="photo-section" style={{ height: heigh }}> */}
			<div className={`photo-section ${expanded ? "expanded" : "collapsed"}`}>
				<div className="photo-section-item">
					<div className="photo-box">
						<div className="photo">
							<img src={amir} alt="carl" />
						</div>
						<div className="profile-bio-box">
							<div className="name1">Amir Amanzadi</div>
							<div className="designation">Bioninformatics Engineer</div>
						</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={milad} alt="carl" />
						</div>
						<div className="name1">Dr. Milad Bagheri</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={yacine} alt="carl" />
						</div>
						<div className="name1">Yacine Balit</div>
						<div className="designation">Business Development</div>
					</div>
					{/* <div className="photo-box">
            <div className="photo">
              <img src={mohmad} alt="carl" />
            </div>
            <div className="name1">Dr. Mohamed Belhocine</div>
            <div className="designation">Chief Laboratory Officer</div>
          </div> */}
					<div className="photo-box">
						<div className="photo">
							<img src={malaz} alt="carl" />
						</div>
						<div className="name1">Malaz Bushra Abdullah </div>
						<div className="designation">Laboratory Technician</div>
					</div>
					{/* <div className="photo-box">
            <div className="photo">
              <img src={rob} alt="carl" />
            </div>
            <div className="name1">Dr. Rob Caldwell</div>
            <div className="designation">VP Govt Affairs</div>
          </div> */}
					<div className="photo-box">
						<div className="photo">
							<img src={joseph} alt="carl" />
						</div>
						<div className="name1">Joseph Cohen</div>
						<div className="designation">
              Business Development Prepaire Shield
						</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={sarah} alt="carl" />
						</div>
						<div className="name1">Sarah Cronin</div>
						<div className="designation">Project Manager</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={karim} alt="carl" />
						</div>
						<div className="name1">Dr. Karim Dellal</div>
						<div className="designation">Chief Technology Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={dmytro} alt="carl" />
						</div>
						<div className="name1">Dmytro Lutsenko</div>
						<div className="designation">Machine Learning Engineer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={ahamad} alt="carl" />
						</div>
						<div className="name1">Dr. Ahmed E.A.H</div>
						<div className="designation">Biomedical Engineer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={hector} alt="carl" />
						</div>
						<div className="name1">Hector Figueroa</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={Adam} alt="carl" />
						</div>
						<div className="name1">Adam Freer</div>
						<div className="designation">Business Director</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={carl} alt="carl" />
						</div>
						<div className="name1">Carl Freer</div>
						<div className="designation">Chief Executive Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={asma} alt="carl" />
						</div>
						<div className="name1">Asma Hmead</div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={ahamad} alt="carl" />
						</div>
						<div className="name1">Ahmed Hussein</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={oliver} alt="carl" />
						</div>
						<div className="name1">Oliver Ilves</div>
						<div className="designation">Front-End Developer</div>
					</div>

					<div className="photo-box">
						<div className="photo">
							<img src={ines} alt="carl" />
						</div>
						<div className="name1">Ines Jelacic</div>
						<div className="designation">Executive Office Manager</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={tyler} alt="carl" />
						</div>
						<div className="name1">Tyler Katz</div>
						<div className="designation">Software Architect</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={fred} alt="carl" />
						</div>
						<div className="name1">Frederick Kolberg</div>
						<div className="designation">VP Prepaire Shield</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={archna} alt="carl" />
						</div>
						<div className="name1">Archana K. Kumar</div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={kunj} alt="carl" />
						</div>
						<div className="name1">Kunji Lal Meena</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={manar} alt="carl" />
						</div>
						<div className="name1">Manar Mohamed </div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={Atefeh} alt="carl" />
						</div>
						<div className="name1">Atefeh Moradyani </div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={brent} alt="carl" />
						</div>
						<div className="name1">Brent Pass </div>
						<div className="designation">Chief Operating Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={vicent} alt="carl" />
						</div>
						<div className="name1">Dr. Vicent J. Ribas Ripoll </div>
						<div className="designation">Chief Science Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={daniel} alt="carl" />
						</div>
						<div className="name1">Daniel Rodrigues</div>
						<div className="designation">Head of Design</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={muhmmad} alt="carl" />
						</div>
						<div className="name1">Muhammad Saqlain Abbas</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={lawrence} alt="carl" />
						</div>
						<div className="name1">Lawrence Sevilla</div>
						<div className="designation">
              Laboratory Information System Architect
						</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={vivek} alt="carl" />
						</div>
						<div className="name1">Vivek Sharma</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={andrew} alt="carl" />
						</div>
						<div className="name1">Andrew Totta</div>
						<div className="designation">Business Ambassador</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={narges} alt="carl" />
						</div>
						<div className="name1">Farshid Zargari</div>
						<div className="designation">Data Scientist</div>
					</div>
				</div>
			</div>
			{/* <button type="button" onClick={viewAll} className="viewAll-Button">
        {button}
      </button> */}
			<button type="button" onClick={toggleView} className="viewAll-Button">
				{expanded ? "Collapse" : "View all members"}
			</button>
		</div>
	);
};
export default Prepaireteam;
