import React from "react";
import Image from "next/image";
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

	border-radius: 18px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
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

const SpeakerTalk = ({ imageOnRight = true, id, children }) => {
	return (
		<OuterContainer
			id={id}
			className="bg-secondary d-flex justify-content-center"
		>
			<Separator className="shadow bg-cream me-lg-5 me-3" />
			<Container className="shadow bg-cream d-flex flex-lg-row flex-column align-items-center position-relative">
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
