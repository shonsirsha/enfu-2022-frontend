import { useEffect, useState } from "react";
import SubscribeModal from "../components/modals/SubscribeModal";

export default function Home() {
	const [isSSR, setIsSSR] = useState(true);
	const [showSubscribeModal, setShowSubscribeModal] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<SubscribeModal
					showSubscribeModal={showSubscribeModal}
					setShowSubscribeModal={setShowSubscribeModal}
				/>
			)}
		</>
	);
}
