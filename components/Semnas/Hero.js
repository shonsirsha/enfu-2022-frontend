import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { SemiCircle } from "components/SemiCircle";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 120px 160px;
	padding-bottom: 0;

	border-radius: 32px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
	}
`;

const ImageContainer = styled.div`
	width: 580px;
	height: 260px;
	position: relative;
	max-width: 100%;

	@media ${mediaBreakpoint.down.md} {
		width: 350px;
		height: 140px;
	}
`;

const WaveRed = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
		<path
			fill="#FE5A24"
			d="m0 64 60 10.7C120 85 240 107 360 117.3 480 128 600 128 720 128s240 0 360 21.3c120 21.7 240 63.7 300 85.4l60 21.3v64H0Z"
		/>
	</svg>
);

const WaveBlue = (props) => (
	<svg
		style={{ zIndex: 2 }}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		{...props}
	>
		<path
			fill="#88CCF9"
			d="m0 0 48 32c48 32 144 96 240 133.3 96 37.7 192 47.7 288 48 96-.3 192-10.3 288-42.6 96-31.7 192-85.7 288-69.4 96 15.7 192 101.7 240 144l48 42.7v32H0Z"
		/>
	</svg>
);

const WaveContainer = styled.div`
	& > svg {
		z-index: 1;
		position: absolute;
		bottom: 30px;
		right: -350px;
	}

	@media ${mediaBreakpoint.down.md} {
		& > svg {
			bottom: -32px;
		}
	}
`;

const Hero = () => {
	return (
		<OuterContainer id="#home" className="bg-cream d-flex position-relative">
			<Container className=" bg-cream d-flex flex-column align-items-center position-relative">
				<ImageContainer>
					<Image src={"/assets/semnaslogo2.png"} layout="fill" alt="Logo" />
				</ImageContainer>
			</Container>
			<WaveBlue />
			<WaveContainer>
				<WaveRed />
			</WaveContainer>
		</OuterContainer>
	);
};

export default Hero;
