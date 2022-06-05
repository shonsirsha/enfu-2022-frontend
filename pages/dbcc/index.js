import React from "react";
import Home from "components/DBCC/Home";

const Index = () => {
	return (
		<Home
			title={
				<>
					<span className="small">DIPONEGORO BUSINESS</span> <br /> CASE
					COMPETITION
				</>
			}
			content={
				<>
					It{"'"}s the perfect time to show your teamwork skills with creative
					and innovative ideas!{" "}
					<span className="text-orange">
						Diponegoro Bussines Case Competition
					</span>{" "}
					will give you an internationally relevant experiences to think
					critically in solving business problems.
				</>
			}
		/>
	);
};

export default Index;
