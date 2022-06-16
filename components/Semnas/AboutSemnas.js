import React from "react";
import styled from "styled-components";
import { SemiCircle } from "components/SemiCircle";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	display: flex;
	padding: 64px 32px;
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 120px 160px;

	border-radius: 18px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
	}
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 64px;
	line-height: 64px;
	letter-spacing: 1.6px;

	& .ap {
		font-family: Poppins;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 40px;
		line-height: 40px;
	}
`;

const TextAbout = styled.p`
	font-size: 24px;
	font-weight: 300;
	line-height: 32px;
	letter-spacing: 0.5px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 18px;
		line-height: 26px;
	}
`;

const PillContainer = styled.div`
	padding: 8px 16px;
	border-radius: 16px;

	p {
		font-size: 18px;
	}
`;

const SemiCLeftContainer = styled.div`
	position: absolute;
	left: -45px;
	top: 50%;
	transform: translateY(-50%);

	@media ${mediaBreakpoint.down.md} {
		left: -32px;
	}
`;

const SemiCRightContainer = styled.div`
	position: absolute;
	right: -45px;
	top: 50%;
	transform: translateY(-50%);

	@media ${mediaBreakpoint.down.md} {
		right: -32px;
	}
`;

const SemiCLeft = styled(SemiCircle)`
	width: 180px;
	height: 90px;
	transform: rotate(90deg);

	@media ${mediaBreakpoint.down.lg} {
		width: 120px;
		height: 60px;
	}

	@media ${mediaBreakpoint.down.md} {
		width: 90px;
		height: 45px;
	}
`;
const SemiCRight = styled(SemiCircle)`
	width: 180px;
	height: 90px;
	transform: rotate(270deg);

	@media ${mediaBreakpoint.down.lg} {
		width: 120px;
		height: 60px;
	}

	@media ${mediaBreakpoint.down.md} {
		width: 90px;
		height: 45px;
	}
`;

const AboutSemnas = () => {
	return (
		<OuterContainer
			id="about-us"
			className="bg-cream bg-cream d-flex justify-content-center"
		>
			<Container className="bg-orange d-flex flex-column align-items-center position-relative">
				<SemiCLeftContainer>
					<SemiCLeft className="bg-cream" />
				</SemiCLeftContainer>

				<SemiCRightContainer>
					<SemiCRight className="bg-cream" />
				</SemiCRightContainer>
				<Header className="mb-3 text-center text-cream">
					NATIONAL SEMINAR
				</Header>

				<TextAbout className="text-cream">
					National Seminar is an annual event in order to empower students and
					societies throughout Indonesia. This event will invite national
					speakers who are competent and expert in their fields which are able
					to provide motivations and insight. Our main goal is to educate
					properly and appropriately, especially the youth generation about the
					importance of improving self-quality in order to have a competitive
					advantage during this dynamic era. Thus, they can contribute, lead
					change and development in Indonesia.
				</TextAbout>

				<Header as="h2" className="mt-5 mb-3 text-center text-cream">
					OUR THEME
				</Header>

				<PillContainer className="bg-danger w-100">
					<TextAbout className="text-cream text-center">
						<i>
							“Increasing the Value of Youth Generationton Face Upcoming Era”
						</i>
					</TextAbout>
				</PillContainer>

				<TextAbout className="mt-3 text-cream">
					In this increasingly dynamic world, the young generation is required
					to have extensive knowledge and capable skills to face the future.
					Youth must be creative, innovative, and critical in order to create
					solutions to increasingly complex problems. Therefore, the National
					Seminar Enfution comes with the theme “Increasing the Value of Youth
					Generationton Face Upcoming Era” as a forum for youth to expand their
					knowledge and skills. This event is also a form of dedication to the
					Indonesian in order to create a young generation of future national
					leaders.
				</TextAbout>
			</Container>
		</OuterContainer>
	);
};

export default AboutSemnas;
