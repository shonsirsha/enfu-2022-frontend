import React, { useState, useEffect } from "react";
import AboutUsDBCC from "components/DBCC/AboutUs/AboutUsDBCC";
import AboutUsCoachingClinic from "components/DBCC/AboutUs/AboutUsCoachingClinic";
import AboutUsCoachingSession from "components/DBCC/AboutUs/AboutUsCoachingSession";
const AboutUs = () => {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	return (
		<>
			{!isSSR && (
				<div className="d-flex flex-column">
					<AboutUsDBCC />
					<AboutUsCoachingClinic />
					<AboutUsCoachingSession />
				</div>
			)}
		</>
	);
};

export default AboutUs;
