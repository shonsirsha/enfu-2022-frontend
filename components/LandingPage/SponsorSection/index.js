import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledContainer = styled.div`
	z-index: 3;
	padding: 64px 24px;
`;

const LogosContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 16px;
	border-radius: 18px;
	min-height: 320px;
`;

const LabelContainer = styled.div`
	border-radius: 32px;
	height: 40px;
	padding: 32px;
	padding-top: 8px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;

const LabelText = styled.p`
	font-family: Poppins;
	font-weight: 500;
	line-height: 24px;
	font-size: 22px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 20px;
	}
`;
const SponsorSection = () => {
	return (
		<StyledContainer className="bg-secondary d-flex flex-column align-items-center justify-content-center">
			<LogosContainer className="position-relative w-100 bg-cream">
				<LabelContainer className="bg-orange">
					<LabelText className="text-white">Sponsored by</LabelText>
				</LabelContainer>
			</LogosContainer>

			<div className="d-flex flex-lg-row flex-column w-100 mt-5">
				<LogosContainer className="position-relative w-100 bg-cream me-lg-5 me-0 mb-lg-0 mb-5">
					<LabelContainer className="bg-orange">
						<LabelText className="text-white">Media Partner</LabelText>
					</LabelContainer>
				</LogosContainer>

				<LogosContainer className="position-relative w-100 bg-cream">
					<LabelContainer className="bg-orange">
						<LabelText className="text-white">Community Partners</LabelText>
					</LabelContainer>
				</LogosContainer>
			</div>
		</StyledContainer>
	);
};

export default SponsorSection;
