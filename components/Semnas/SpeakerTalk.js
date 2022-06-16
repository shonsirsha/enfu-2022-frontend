import React from "react";
import Image from "next/image";
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

const ImageContainer = styled.div`
	width: 240px;
	height: 240px;
	position: relative;
`;

const NameContainer = styled.div`
	min-width: 60px;
	min-height: 40px;
	border-radius: 16px;
	margin-top: -24px;
	z-index: 1;
	padding: 8px 16px;
`;

const SpeakerName = styled.p`
	font-family: TT_Ramilas;
	font-size: 24px;
	text-align: center;
	font-weight: 600;
	text-transform: uppercase;
`;

const Separator = styled.div`
	width: 18px;
	border-radius: 16px;
`;

const SpeakerTalk = ({ imageOnRight = true, children }) => {
	return (
		<OuterContainer
			id="about-us"
			className="bg-secondary d-flex justify-content-center"
		>
			<Separator className="shadow bg-cream me-lg-5 me-3" />
			<Container className="shadow bg-cream d-flex flex-column align-items-center position-relative">
				{imageOnRight && <>{children}</>}

				<div
					className={`d-flex flex-column ${
						imageOnRight ? `ms-lg-auto` : `me-lg-auto`
					} mx-lg-0 mx-auto`}
				>
					<ImageContainer>
						<Image src="/assets/mystery_speaker.png" alt="" layout="fill" />
					</ImageContainer>
					<NameContainer className="bg-danger">
						<SpeakerName className="text-cream">Speaker Name</SpeakerName>
					</NameContainer>
				</div>

				{!imageOnRight && <>{children}</>}
			</Container>
			<Separator className="shadow bg-cream ms-lg-5 ms-3" />
		</OuterContainer>
	);
};

export default SpeakerTalk;
