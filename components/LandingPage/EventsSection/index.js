import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	height: 100vh;
	z-index: 2;
	padding: 64px 0;
	border-radius: 104px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

const EventsSection = () => {
	return (
		<div className="bg-secondary">
			<StyledContainer className="bg-orange">index</StyledContainer>
		</div>
	);
};

export default EventsSection;
