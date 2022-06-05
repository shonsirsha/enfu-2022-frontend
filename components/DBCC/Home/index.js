import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const TopContainer = styled.div`
	height: 380px;
	width: 100%;
	border-bottom-left-radius: 120px;
	border-bottom-right-radius: 120px;
	display: flex;

	@media ${mediaBreakpoint.down.md} {
		height: 260px;
	}
`;
const TopContainerInner = styled(TopContainer)`
	height: 360px;
	align-items: center;
	justify-content: center;

	@media ${mediaBreakpoint.down.md} {
		height: 240px;
	}
`;

const Header = styled.h1`
	margin: 0;
	font-family: TT_Ramilas;
	font-weight: 700;
	font-size: 56px;
	line-height: 56px;
	letter-spacing: 1.8px;
	.small {
		font-size: 46px;
		line-height: 46px;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 28px;
		line-height: 28px;

		.small {
			font-size: 28px;
			line-height: 28px;
		}
	}
`;

const Circle = styled.div`
	width: 81px;
	height: 81px;
	border-radius: 100%;
	flex-shrink: 0;

	@media ${mediaBreakpoint.down.md} {
		width: 48px;
		height: 48px;
	}
`;

const ParagraphContainer = styled.div`
	padding: 90px 160px;
	border-radius: 120px;
	max-width: 1200px;

	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 100px;
		max-width: 640px;
	}

	@media ${mediaBreakpoint.down.md} {
		border-radius: 40px;

		padding: 24px;
		max-width: 300px;
	}
`;
const Paragraph = styled.p`
	margin: 0;
	font-size: 24px;
	line-height: 24px;
	font-weight: 600;

	@media ${mediaBreakpoint.down.lg} {
		font-size: 16px;
		line-height: 16px;
	}
`;

const Block = styled.div`
	width: 170px;
	height: 120px;
	border-radius: 16px;
	position: absolute;

	&.blockLeft {
		left: -80px;
		bottom: 0;
		transform: translateY(-50%);
	}

	&.blockRight {
		right: -80px;
		bottom: 0;
		transform: translateY(-50%);
	}
`;

const Home = ({ title = <></>, content = <></> }) => {
	return (
		<OuterContainer className="bg-orange align-items-center">
			<TopContainer className="bg-secondary shadow mb-md-5 mb-3">
				<TopContainerInner className="bg-cream shadow flex-lg-row flex-column">
					<Circle className="bg-secondary shadow" />
					<Header className="text-center my-3 my-lg-0 mx-lg-5 mx-0">
						{title}
					</Header>

					<Circle className="bg-secondary shadow" />
				</TopContainerInner>
			</TopContainer>

			<ParagraphContainer className="bg-cream mt-md-5 mt-3 shadow position-relative">
				<Block className="bg-danger blockLeft d-lg-block d-none" />
				<Paragraph className="text-start">{content}</Paragraph>
				<Block className="bg-danger blockRight d-lg-block d-none" />
			</ParagraphContainer>
		</OuterContainer>
	);
};

export default Home;
