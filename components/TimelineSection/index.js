import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
const Container = styled.div`
	height: 800px;
	z-index: 3;
	padding: 64px 0;

	@media ${mediaBreakpoint.down.md} {
		padding: 32px 0;
	}
`;

const InnerContainer = styled.div`
	z-index: 4;
	border-radius: 120px;
	padding: 32px;
	height: 100%;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 64px;
	}
`;

const TimeLineBadge = styled.div`
	width: 480px;
	max-width: 100%;
	height: 180px;
	position: relative;
	z-index: 5;
	border: 12px solid #88ccf9;
	border-radius: 100%;

	left: 50%;
	transform: translateX(-50%);
	bottom: 160px;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;

	@media ${mediaBreakpoint.down.md} {
		width: 300px;
		height: 120px;
		bottom: 110px;
	}
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-weight: 900;
	font-size: 56px;
	line-height: 56px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 40px;
		line-height: 40px;
	}
`;

const Subheader = styled.h3`
	font-family: TT_Ramilas;
	font-weight: 900;
	font-size: 32px;
	line-height: 32px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 29px;
		line-height: 29px;
	}
`;

const index = () => {
	return (
		<Container className="mt-5 bg-secondary position-relative">
			<InnerContainer className="bg-cream position-relative">
				<TimeLineBadge className="bg-danger">
					<Header className="text-cream">Timeline</Header>
					<Subheader className="text-cream">2022</Subheader>
				</TimeLineBadge>
			</InnerContainer>
		</Container>
	);
};

export default index;
