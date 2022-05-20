import { useEffect, useState } from "react";
import SubscribeModal from "../components/modals/SubscribeModal";
import TimelineSection from "components/TimelineSection";

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
					<div className="mb-5">Another section...</div>
					<div className="mb-5"></div>
					<TimelineSection />
				</>
			)}
		</>
	);
}
