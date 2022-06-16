import Link from "next/link";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	padding: 32px;
`;

const InnerContainer = styled.div`
	border-radius: 30%;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	width: 100%;
	padding-top: 32px;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 25%;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}
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

const LinkContainer = styled.div`
	padding: 8px 32px;
	border-radius: 80px;
	display: flex;
	width: 270px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledLink = styled.a`
	font-size: 24px;
	font-height: 24px;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 500;
	font-family: Poppins;
	& a:hover {
		color: inherit;
	}
`;

const ImageContainer = styled.div`
	width: 520px;
	height: 232px;
	position: relative;

	@media ${mediaBreakpoint.down.md} {
		width: 300px;
		height: 132px;
	}
`;

const Block = styled.div`
	height: 220px;
	width: 240px;
	display: flex;
	border-radius: 32px;
`;

const PillLink = ({ text, href = "/", className }) => (
	<Link href={href}>
		<LinkContainer className={`bg-danger justify-content-center ${className}`}>
			<StyledLink className="text-cream text-center">{text}</StyledLink>
		</LinkContainer>
	</Link>
);

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
