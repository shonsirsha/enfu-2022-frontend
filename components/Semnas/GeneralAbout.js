import React from "react";
import { SemiCircle } from "components/SemiCircle";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	display: flex;
	padding: 64px 32px;
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 120px 160px;
	padding-top: 170px;

	border-radius: 32px;
	min-height: 360px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
	}
`;

const StyledSemiC = styled(SemiCircle)`
	position: absolute;
	left: 50%;
	top: 0;
	border: 16px solid #88ccf9;
	border-bottom: none;
	transform: translateX(-50%) rotate(180deg);
`;

const GeneralAbout = () => {
	return (
		<OuterContainer
			id="general-about"
			className="bg-secondary d-flex justify-content-center"
		>
			<Container className="shadow bg-cream d-flex flex-column align-items-center position-relative">
				<StyledSemiC className="bg-orange" />
			</Container>
		</OuterContainer>
	);
};

export default GeneralAbout;
