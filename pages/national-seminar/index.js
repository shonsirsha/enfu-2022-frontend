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
import styled from "styled-components";

const TalkIncHeader = styled.p`
	font-size: 32px;
	font-family: TT_Ramilas;
	font-weight: 600;
`;

const SpeakerTalkBody = styled.p`
	font-size: 24px;
`;

const SpeakerQuote = styled.div`
	font-size: 21px;
	font-style: italic;
	padding: 16px;
	border-radius: 32px;
	border-top-right-radius: 0;
`;

const Home = () => {
	return (
		<div className="d-flex flex-column w-100">
			<Hero />
			<GeneralAbout />
			<SpeakerTalk id={"speakertalk"}>
				<div className="d-flex flex-column me-lg-5 me-0 mb-lg-0 mb-4">
					<TalkIncHeader className="ms-lg-auto mx-auto mx-lg-0 mb-3">
						Talk Inc<span className="text-danger">.</span> 1
					</TalkIncHeader>

					<SpeakerQuote className="bg-secondary mb-3 text-center text-cream">
						“Dive into the Future with Modern Thinking”
					</SpeakerQuote>

					<SpeakerTalkBody>
						<b>Times are changing</b> because <b>they{"'"}re dynamic.</b> We
						notice that technology has evolved very rapidly, as well as our
						society. That{"'"}s why modern thinking is needed, with this we can
						adapt to that <b>{"'new ways'"}</b> quickly. With our skilled
						speakers, you can learn modern thinking and be prepared for your own
						future. Want to improve your thinking and be ready to face future
						challenges? Don{"'"}t be hesitant to join Talk Inc. 2 presented by
						<b>
							14<sup>th</sup> Enfution.
						</b>
					</SpeakerTalkBody>
				</div>
			</SpeakerTalk>
			<TimelineSharingSession />
			<SpeakerTalk imageOnRight={false} id={"speakertalk2"}>
				<div className="d-flex flex-column ms-lg-5 me-0 mb-lg-0 mb-4">
					<TalkIncHeader className="me-lg-auto mx-lg-0 mx-auto mb-3 mt-4 mt-lg-0">
						Talk Inc<span className="text-danger">.</span> 2
					</TalkIncHeader>

					<SpeakerQuote className="bg-secondary mb-3 text-center text-cream">
						“Human and Technology: What’s the Deal with Future Challenges?”
					</SpeakerQuote>

					<SpeakerTalkBody>
						<b>Technology development</b> is in line with human nature, which
						will never stop exploring. The sophistication of technology in the
						future certainly poses its own challenges for humans, which we must
						anticipate from now on. Through this first talk, you will get an
						idea of the future{"'"}s challenges and how humans can adapt to the
						sophistication of technology constantly being developed. By
						presenting competent speakers,{" "}
						<b>
							<i>Talk Inc. 1</i>
						</b>{" "}
						will add to your insight.
					</SpeakerTalkBody>
				</div>
			</SpeakerTalk>
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
