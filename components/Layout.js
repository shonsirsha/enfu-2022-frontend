import React from "react";
import Head from "next/head";
import MyNavbar from "./Navbar";
import FooterSectionDBCC from "./DBCC/FooterSection/index";
import { useRouter } from "next/router";
import FooterSection from "./LandingPage/FooterSection";

const Layout = ({
	title = "Enfution",
	description = "Enfution",
	keywords = "enfution,undip,dbcc,seminar nasional, national seminar, business case competition, semnas, universitas diponegoro",
	children,
}) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="shortcut icon" href="imgs/favicon.ico" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>

			{router.pathname.includes("dbcc") && <MyNavbar />}

			<div className="position-relative" style={{ marginTop: 90 }}>
				{children}
			</div>

			{router.pathname.includes("dbcc") && <FooterSectionDBCC />}
			{router.pathname === "/" && <FooterSection />}
		</>
	);
};

export default Layout;