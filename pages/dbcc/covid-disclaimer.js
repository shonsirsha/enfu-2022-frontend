import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
const OuterContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InnerContainer = styled.div`
	max-width: 960px;
	top: -74px;

	@media ${mediaBreakpoint.down.md} {
		top: 0;
	}
`;

const TextContainer = styled.div`
	padding: 96px;
	width: 100%;
	font-weight: 500;
	font-size: 24px;
	border-radius: 48px;

	@media ${mediaBreakpoint.down.md} {
		padding: 96px 24px;
	}
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-size: 56px;
	font-weight: 600;
	line-height: 56px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;
const Exclamation = styled.div`
	border-radius: 100%;
	width: 160px;
	height: 160px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 81px;
	color: #fffbf0;
	font-weight: 800;
	margin: 0;
	border: 10px solid #fffbf0;
	position: absolute;
	right: 20px;
	top: -80px;

	@media ${mediaBreakpoint.down.md} {
		right: 0%;
		left: 50%;
		transform: translateX(-50%);
	}
`;

const BlueContainer = styled.div`
	border-top-right-radius: 120px;
	border-top-left-radius: 120px;
	justify-content: center;
	display: flex;
	width: 100%;

	@media ${mediaBreakpoint.down.md} {
		background: transparent !important;
	}
`;

const CovidDisclaimer = () => {
	return (
		<OuterContainer className="bg-cream flex-column pt-5">
			<Header className="text-center mb-5">DISCLAIMER</Header>
			<BlueContainer className="bg-secondary">
				<InnerContainer className="mt-5 position-relative">
					<TextContainer className="bg-orange text-staart shadow position-relative">
						Due to the COVID-19 pandemic, all events will be held{" "}
						<span className="text-danger">online</span>. This will provide
						convenience for participants from others cities and countries.
						<Exclamation className="bg-danger shadow">!</Exclamation>
					</TextContainer>
				</InnerContainer>
			</BlueContainer>
		</OuterContainer>
	);
};

export default CovidDisclaimer;
