import { useEffect, useState } from "react";
import Head from "next/head";
import SubscribeModal from "../components/modals/SubscribeModal";
import TimelineSection from "components/LandingPage/TimelineSection";
import EventsSection from "components/LandingPage/EventsSection";
import AboutUsSection from "components/LandingPage/AboutUsSection";
import HeroSection from "components/LandingPage/HeroSection";
import SponsorSection from "components/LandingPage/SponsorSection";
import ForewordSection from "components/LandingPage/ForewordSection";

export default function Home({ config }) {
	const [isSSR, setIsSSR] = useState(true);
	const [showSubscribeModal, setShowSubscribeModal] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<>
					<Head>
						<title>Enfution 2022</title>
					</Head>
					<HeroSection />
					<AboutUsSection />
					<SubscribeModal
						showSubscribeModal={showSubscribeModal}
						setShowSubscribeModal={setShowSubscribeModal}
					/>
					{config && <EventsSection config={config} />}
					<TimelineSection />
					<ForewordSection />
					<SponsorSection />
				</>
			)}
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const config = (await res.json()).result[0];

	return {
		props: {
			config: config ? config : null,
		},
	};
}
