import React, { useState } from "react";
import "./style.scss";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import PrepaireLogo from "../../../Assets/Team/prepire-logo.svg";
import a from "../../../Assets/Team/ProfilePicture/Frame 2085660924.png";
import b from "../../../Assets/Team/ProfilePicture/Frame 2085660924-1.png";
import c from "../../../Assets/Team/ProfilePicture/Frame 2085660924-2.png";
import d from "../../../Assets/Team/ProfilePicture/Frame 2085660924-3.png";
import e from "../../../Assets/Team/ProfilePicture/Frame 2085660924-4.png";
import f from "../../../Assets/Team/ProfilePicture/Frame 2085660924-5.png";
import g from "../../../Assets/Team/ProfilePicture/Frame 2085660924-6.png";
import h from "../../../Assets/Team/ProfilePicture/Frame 2085660924-7.png";
import i from "../../../Assets/Team/ProfilePicture/Frame 2085660924-8.png";
import j from "../../../Assets/Team/ProfilePicture/Frame 2085660924-9.png";
import k from "../../../Assets/Team/ProfilePicture/Frame 2085660924-10.png";
import l from "../../../Assets/Team/ProfilePicture/Frame 2085660924-11.png";
import m from "../../../Assets/Team/ProfilePicture/Frame 2085660924-12.png";
import n from "../../../Assets/Team/ProfilePicture/Frame 2085660924-13.png";
import o from "../../../Assets/Team/ProfilePicture/Frame 2085660924-14.png";
import p from "../../../Assets/Team/ProfilePicture/Frame 2085660924-15.png";

import q from "../../../Assets/Team/ProfilePicture/Frame 2085660924-16.png";
import r from "../../../Assets/Team/ProfilePicture/Frame 2085660924-17.png";
import s from "../../../Assets/Team/ProfilePicture/Frame 2085660924-18.png";
import t from "../../../Assets/Team/ProfilePicture/Frame 2085660924-19.png";
import u from "../../../Assets/Team/ProfilePicture/Frame 2085660924-20.png";
import v from "../../../Assets/Team/ProfilePicture/Frame 2085660924-21.png";
import w from "../../../Assets/Team/ProfilePicture/Frame 2085660924-22.png";
import x from "../../../Assets/Team/ProfilePicture/Frame 2085660924-23.png";
import y from "../../../Assets/Team/ProfilePicture/Frame 2085660924-24.png";
import z from "../../../Assets/Team/ProfilePicture/Frame 2085660924-25.png";
import aa from "../../../Assets/Team/ProfilePicture/Frame 2085660924-26.png";
import bb from "../../../Assets/Team/ProfilePicture/Frame 2085660924-27.png";
import cc from "../../../Assets/Team/ProfilePicture/Frame 2085660924-28.png";
import dd from "../../../Assets/Team/ProfilePicture/Frame 2085660924-29.png";

const Prepaireteam = () => {
	// const navigate = useNavigate();
	// Extracts pathname property(key) from an object
	const [button, setButton] = useState("View All");
	const [heigh, setHeigh] = useState("calc((100vw) * 1.1)");
	function viewAll() {
		if (button === "View All") {
			setButton("Collapse");
			setHeigh("100%");
		} else {
			setButton("Collapse");
			setHeigh("calc((100vw) * 1.1)");
		}
	}
	return (
		<div className="prepaire-team-container">
			<div className="talented_team">
				<img src={PrepaireLogo} alt="logo" />
				<div className="talented-tem-text">
					Our <span> talented team </span>
				</div>
			</div>

			<div className="photo-section" style={{ height: heigh }}>
				<div className="photo-section-item">
					<div className="photo-box">
						<div className="photo">
							<img src={a} alt="carl" />
						</div>
						<div className="name1">Amir Amanzadi</div>
						<div className="designation">Bioninformatics Engineer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={b} alt="carl" />
						</div>
						<div className="name1">Dr. Milad Bagheri</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={c} alt="carl" />
						</div>
						<div className="name1">Yacine Balit</div>
						<div className="designation">Business Development</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={d} alt="carl" />
						</div>
						<div className="name1">Dr. Mohamed Belhocine</div>
						<div className="designation">Chief Laboratory Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={e} alt="carl" />
						</div>
						<div className="name1">Malaz Bushra Abdullah </div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={f} alt="carl" />
						</div>
						<div className="name1">Dr. Rob Caldwell</div>
						<div className="designation">VP Govt Affairs</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={g} alt="carl" />
						</div>
						<div className="name1">Joseph Cohen</div>
						<div className="designation">
							Business Development Prepaire Shield
						</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={h} alt="carl" />
						</div>
						<div className="name1">Dr. Karim Dellal</div>
						<div className="designation">Chief Technology Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={i} alt="carl" />
						</div>
						<div className="name1">Dmytro Lutsenko</div>
						<div className="designation">Machine Learning Engineer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={j} alt="carl" />
						</div>
						<div className="name1">Dr. Ahmed E.A.H</div>
						<div className="designation">Biomedical Engineer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={k} alt="carl" />
						</div>
						<div className="name1">Hector Figueroa</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={l} alt="carl" />
						</div>
						<div className="name1">Adam Freer</div>
						<div className="designation">Business Director</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={m} alt="carl" />
						</div>
						<div className="name1">Carl Freer</div>
						<div className="designation">Chief Executive Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={n} alt="carl" />
						</div>
						<div className="name1">Asma Hmead</div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={o} alt="carl" />
						</div>
						<div className="name1">Ahmed Hussein</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={p} alt="carl" />
						</div>
						<div className="name1">Oliver Ilves</div>
						<div className="designation">Front-End Developer</div>
					</div>

					<div className="photo-box">
						<div className="photo">
							<img src={q} alt="carl" />
						</div>
						<div className="name1">Ines Jelacic</div>
						<div className="designation">Executive Office Manager</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={r} alt="carl" />
						</div>
						<div className="name1">Tyler Katz</div>
						<div className="designation">Software Architect</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={s} alt="carl" />
						</div>
						<div className="name1">Frederick Kolberg</div>
						<div className="designation">VP Prepaire Shield</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={t} alt="carl" />
						</div>
						<div className="name1">Archana K. Kumar</div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={u} alt="carl" />
						</div>
						<div className="name1">Kunji Lal Meena</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={v} alt="carl" />
						</div>
						<div className="name1">Manar Mohamed </div>
						<div className="designation">Laboratory Technician</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={w} alt="carl" />
						</div>
						<div className="name1">Atefeh Moradyani </div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={x} alt="carl" />
						</div>
						<div className="name1">Brent Pass </div>
						<div className="designation">Chief Operating Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={y} alt="carl" />
						</div>
						<div className="name1">Dr. Vicent J. Ribas Ripoll </div>
						<div className="designation">Chief Science Officer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={z} alt="carl" />
						</div>
						<div className="name1">Daniel Rodrigues</div>
						<div className="designation">Head of Design</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={aa} alt="carl" />
						</div>
						<div className="name1">Muhammad Saqlain Abbas</div>
						<div className="designation">Front-End Developer</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={bb} alt="carl" />
						</div>
						<div className="name1">Vivek Sharma</div>
						<div className="designation">Data Scientist</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={cc} alt="carl" />
						</div>
						<div className="name1">Andrew Totta</div>
						<div className="designation">Business Ambassador</div>
					</div>
					<div className="photo-box">
						<div className="photo">
							<img src={dd} alt="carl" />
						</div>
						<div className="name1">Farshid Zargari</div>
						<div className="designation">Data Scientist</div>
					</div>
				</div>
			</div>
			<button type="button" onClick={viewAll} className="viewAll-Button">
				{button}
			</button>
		</div>
	);
};
export default Prepaireteam;
