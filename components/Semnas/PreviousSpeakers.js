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
	width: 120px;
	height: 120px;
	position: relative;
`;

const NameContainer = styled.div`
	min-width: 60px;
	min-height: 40px;
	border-radius: 16px;
	margin-top: -42px;
	z-index: 1;
`;

const PreviousSpeakers = () => {
	return (
		<OuterContainer className="bg-cream bg-cream d-flex justify-content-center">
			<Container className="d-flex flex-column align-items-center">
				<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
					PREVIOUS <span className="text-danger">SPEAKERS</span> AND GUESTS OF{" "}
					<span className="text-danger">HONOR</span>
				</Header>

				<div className="d-flex justify-content-center align-items-center flex-wrap w-100 mt-4">
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>{" "}
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>{" "}
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>{" "}
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>{" "}
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>{" "}
					<div className="d-flex flex-column m-3">
						<ImageContainer>
							<Image src="/assets/previous_speaker.png" alt="" layout="fill" />
						</ImageContainer>

						<NameContainer className="bg-orange"></NameContainer>
					</div>
				</div>
			</Container>
		</OuterContainer>
	);
};

export default PreviousSpeakers;
