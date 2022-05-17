import { useEffect, useState } from "react";
import SubscribeModal from "../components/modals/SubscribeModal";
export default function Home() {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<div>
					<SubscribeModal />
				</div>
			)}
		</>
	);
}
