import React from "react";
import Home from "components/DBCC/Home";

const Index = () => {
	return (
		<Home
			title={<>COACHING CLINIC</>}
			content={
				<>
					Improve insight and critical thinking skills with direct guidance on a
					one-on-one meeting with professionals. Let{"'"}s take this{" "}
					<span className="text-orange">Coaching Clinic </span>
					for an in-depth discussion about the paper you have created!
				</>
			}
		/>
	);
};

export default Index;
