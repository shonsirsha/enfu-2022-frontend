import { useState, useEffect } from "react";
import Router from "next/router";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/root.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "components/Layout";

function Main({ Component, pageProps }) {
	const [isSSR, setIsSSR] = useState(true);

	NProgress.configure({
		minimum: 0.3,
		easing: "ease",
		speed: 350,

		showSpinner: false,
	});

	useEffect(() => {
		setIsSSR(false);
	}, []);

	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());
	return (
		<>
			{" "}
			{!isSSR && (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</>
	);
}

export default Main;
