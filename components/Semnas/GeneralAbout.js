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
	padding: 120px 32px;
	padding-top: 80px;

	border-radius: 32px;
	min-height: 360px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
		padding-top: 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
		padding-top: 64px;
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

const Text = styled.p`
	font-size: 16px;
	margin: 0;
	line-height: 24px;
	font-family: Poppins;
`;

const SubheaderContainer = styled.div`
	padding: 8px 16px;
	border-radius: 24px;
	font-size: 24px;
	font-family: TT_Ramilas;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`;

const GeneralAbout = () => {
	return (
		<OuterContainer
			id="general-about"
			className="bg-secondary d-flex justify-content-center"
		>
			<Container className="shadow bg-cream d-flex flex-column align-items-center position-relative">
				<StyledSemiC className="bg-orange" />
				<SubheaderContainer className="text-white bg-orange w-100 text-center mb-4">
					“Collaborating Human and Technology to Overcome Future Challenges”
				</SubheaderContainer>
				<Text>
					<b>14th Enfution</b> has the <b>main event</b> called{" "}
					<b>National Seminar</b>. We will{" "}
					<b>
						discuss and get a broader insight into the technology and how we
						adapt to its evolution, especially in Society 5.0 era
					</b>
					. You will meet and exchange your opinion, and also get a new
					understanding of the tech era from experts such as entrepreneurs,
					CEOs, and influencers. The main goal after you join the summit is that
					you can practice the knowledge of technology and future challenges in
					your life and get your life goals without technological obstacles. Do
					you still confused about how to face future challenges?{" "}
					<b>Let’s join Summit Event presented by 14th Enfution.</b>
				</Text>
			</Container>
		</OuterContainer>
	);
};

export default GeneralAbout;
