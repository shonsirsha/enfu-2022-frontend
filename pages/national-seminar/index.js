import React from "react";

import Hero from "components/Semnas/Hero";
import GeneralAbout from "components/Semnas/GeneralAbout";
import SpeakerTalk from "components/Semnas/SpeakerTalk";
import AboutSemnas from "components/Semnas/AboutSemnas";
import PreviousSpeakers from "components/Semnas/PreviousSpeakers";
import ThisYearsSpeaker from "components/Semnas/ThisYearsSpeaker";
import WhyShouldYouJoin from "components/Semnas/WhyShouldYouJoin";

const Home = () => {
	return (
		<div className="d-flex flex-column w-100">
			<Hero />
			<GeneralAbout />
			<SpeakerTalk id={"speakertalk"} />
			<SpeakerTalk imageOnRight={false} id={"speakertalk2"}></SpeakerTalk>
			<AboutSemnas />
			<ThisYearsSpeaker />
			<WhyShouldYouJoin />
			<PreviousSpeakers />
		</div>
	);
};

export default Home;
