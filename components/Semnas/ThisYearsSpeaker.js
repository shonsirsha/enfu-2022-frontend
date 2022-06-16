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
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 48px;
	line-height: 48px;
	letter-spacing: 1.6px;

	& .ap {
		font-family: Poppins;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const ImageContainer = styled.div`
	width: 240px;
	height: 240px;
	position: relative;
`;

const ThisYearsSpeaker = () => {
	return (
		<OuterContainer className="bg-cream bg-cream d-flex justify-content-center">
			<Container className="d-flex flex-column align-items-center">
				<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
					<span className="text-danger">
						THIS YEAR<span className="ap">{"'"}</span>S
					</span>{" "}
					SPEAKERS
				</Header>

				<div className="d-flex justify-content-center align-items-center flex-lg-row flex-column w-100 mt-4">
					<ImageContainer>
						<Image src="/assets/coming_soon_speaker.png" alt="" layout="fill" />
					</ImageContainer>

					<ImageContainer className="mx-lg-4 mx-0 my-lg-0 my-4">
						<Image src="/assets/coming_soon_speaker.png" alt="" layout="fill" />
					</ImageContainer>

					<ImageContainer>
						<Image src="/assets/coming_soon_speaker.png" alt="" layout="fill" />
					</ImageContainer>
				</div>
			</Container>
		</OuterContainer>
	);
};

export default ThisYearsSpeaker;
