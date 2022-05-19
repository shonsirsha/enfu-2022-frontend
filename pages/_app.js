import Router from "next/router";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/root.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function Main({ Component, pageProps }) {
	NProgress.configure({
		minimum: 0.3,
		easing: "ease",
		speed: 350,

		showSpinner: false,
	});

	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());
	return <Component {...pageProps} />;
}

export default Main;
