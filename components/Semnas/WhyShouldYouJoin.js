import React from "react";
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

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const Block = styled.div`
	height: 220px;
	width: 240px;
	display: flex;
	border-radius: 32px;
`;

const WhyShouldYouJoin = () => {
	return (
		<OuterContainer className="bg-cream bg-cream d-flex justify-content-center">
			<Container className="d-flex flex-column align-items-center">
				<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
					WHY <span className="text-danger">SHOULD</span> YOU JOIN ?
				</Header>

				<div className="d-flex justify-content-center align-items-center flex-lg-row flex-column w-100 mt-4">
					<Block className="bg-orange" />
					<Block className="bg-orange mx-lg-4 mx-0 my-lg-0 my-4" />
					<Block className="bg-orange" />
				</div>
			</Container>
		</OuterContainer>
	);
};

export default WhyShouldYouJoin;