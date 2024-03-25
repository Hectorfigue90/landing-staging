import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import NavBar from "./Components/Structural/NavBar";
import Footer from "./Components/Structural/Footer";
import Developers from "./Pages/Developers";
import Mission from "./Pages/Mission";
import Biotune from "./Pages/Biotune";
import CrowdfundingPage from "./Pages/CrowdFunding";
import Team from "./Pages/Team";
import Hiring from "./Pages/Hiring";
function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/developers" element={<Developers />} />
				<Route exact path="/team" element={<Team />} />
				<Route exact path="/hiring" element={<Hiring />} />
				<Route exact path="/mission" element={<Mission />} />
				<Route exact path="/biotune" element={<Biotune />} />
				<Route exact path="/crowdfunding" element={<CrowdfundingPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
