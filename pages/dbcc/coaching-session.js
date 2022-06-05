import React from "react";
import Home from "components/DBCC/Home";

const Index = () => {
	return (
		<Home
			title={<>COACHING SESSION</>}
			content={
				<>
					Solving cases requires adequate knowledge, critical thinking, and
					great analysis, especially in business. Let{"'"}s take this{" "}
					<span className="text-orange">Coaching Session </span> to get basic
					knowledges about business case from a great mentor, then solve your
					case!
				</>
			}
		/>
	);
};

export default Index;
