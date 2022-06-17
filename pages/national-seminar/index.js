import React from "react";

import Hero from "components/Semnas/Hero";
import GeneralAbout from "components/Semnas/GeneralAbout";
import SpeakerTalk from "components/Semnas/SpeakerTalk";
import AboutSemnas from "components/Semnas/AboutSemnas";
import PreviousSpeakers from "components/Semnas/PreviousSpeakers";
import ThisYearsSpeaker from "components/Semnas/ThisYearsSpeaker";
import WhyShouldYouJoin from "components/Semnas/WhyShouldYouJoin";
import TimelineSemnas from "components/Semnas/TimelineSemnas";
import TimelineSharingSession from "components/Semnas/TimelineSharingSession";
import TimelineSharingSessionTwo from "components/Semnas/TimelineSharingSessionTwo";
import Testimonials from "components/Semnas/Testimonial";

const Home = () => {
	return (
		<div className="d-flex flex-column w-100">
			<Hero />
			<GeneralAbout />
			<SpeakerTalk id={"speakertalk"} />
			<TimelineSharingSession />
			<SpeakerTalk imageOnRight={false} id={"speakertalk2"}></SpeakerTalk>
			<TimelineSemnas />
			<AboutSemnas />
			<ThisYearsSpeaker />
			<WhyShouldYouJoin />
			<TimelineSharingSessionTwo />
			<PreviousSpeakers />
			<Testimonials />
		</div>
	);
};

export default Home;
