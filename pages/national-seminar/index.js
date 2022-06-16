import AboutSemnas from "components/Semnas/AboutSemnas";
import PreviousSpeakers from "components/Semnas/PreviousSpeakers";
import ThisYearsSpeaker from "components/Semnas/ThisYearsSpeaker";
import WhyShouldYouJoin from "components/Semnas/WhyShouldYouJoin";
import React from "react";

const Home = () => {
	return (
		<div className="d-flex flex-column w-100">
			<AboutSemnas />
			<ThisYearsSpeaker />
			<WhyShouldYouJoin />
			<PreviousSpeakers />
		</div>
	);
};

export default Home;
