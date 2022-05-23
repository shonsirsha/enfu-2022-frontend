import { useEffect, useState } from "react";
import SubscribeModal from "../components/modals/SubscribeModal";
import TimelineSection from "components/LandingPage/TimelineSection";
import EventsSection from "components/LandingPage/EventsSection";
import AboutUsSection from "components/LandingPage/AboutUsSection";
import HeroSection from "components/LandingPage/HeroSection";

export default function Home() {
	const [isSSR, setIsSSR] = useState(true);
	const [showSubscribeModal, setShowSubscribeModal] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<>
					<HeroSection />
					<AboutUsSection />
					<SubscribeModal
						showSubscribeModal={showSubscribeModal}
						setShowSubscribeModal={setShowSubscribeModal}
					/>
					<EventsSection />
					<TimelineSection />
				</>
			)}
		</>
	);
}
