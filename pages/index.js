import { useEffect, useState } from "react";
import SubscribeModal from "../components/modals/SubscribeModal";
import TimelineSection from "components/LandingPage/TimelineSection";
import EventsSection from "components/LandingPage/EventsSection";
import AboutUsSection from "components/LandingPage/AboutUsSection";

export default function Home() {
	const [isSSR, setIsSSR] = useState(true);
	const [showSubscribeModal, setShowSubscribeModal] = useState(false);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<>
					<SubscribeModal
						showSubscribeModal={showSubscribeModal}
						setShowSubscribeModal={setShowSubscribeModal}
					/>

					<AboutUsSection />
					<EventsSection />
					<TimelineSection />
				</>
			)}
		</>
	);
}
