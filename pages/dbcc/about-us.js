import React, { useState, useEffect } from "react";
import AboutUsDBCC from "components/DBCC/AboutUs/AboutUsDBCC";
import AboutUsCoachingSession from "components/DBCC/AboutUs/AboutUsCoachingSession";
import AboutUsCoachingClinic from "components/DBCC/AboutUs/AboutUsCoachingClinic";
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
					<AboutUsCoachingSession />
					<AboutUsCoachingClinic />
				</div>
			)}
		</>
	);
};

export default AboutUs;
