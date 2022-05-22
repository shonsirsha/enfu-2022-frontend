import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledRibbon = styled.h1`
	position: absolute;
	display: block;
	width: 260px;
	height: 54px;
	border: 1px solid #ff5a24;
	text-align: center;
	color: #451;
	background: #ff5a24;
	border-radius: 0;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.15) inset, 0 6px 10px rgba(0, 0, 0, 0.15);

	top: -32px;
	left: 50%;
	transform: translateX(-50%);

	font-family: TT_Ramilas;
	font-weight: 900;
	font-size: 40px;
	line-height: 40px;

	&::after,
	&::before {
		content: "";
		position: absolute;
		z-index: 1;
		left: -58px;
		top: 24px;
		display: block;
		width: 40px;
		height: 0px;
		border: 28px solid #ff5a24;
		border-right: 40px solid #ff5a24;
		border-bottom-color: #ff5a24;
		border-left-color: transparent;
		transform: rotate(-5deg);
	}

	&::after {
		left: auto;
		right: -56px;
		width: 70px;
		border-left: 20px solid #ff5a24;
		border-right: 30px solid transparent;
		transform: rotate(5deg);
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 24px;
		line-height: 24px;

		left: 51%;

		width: 180px;
		height: 38px;

		&::after,
		&::before {
			content: "";
			position: absolute;
			z-index: 1;
			left: -36px;
			top: 14px;
			display: block;
			width: 18px;
			height: 0px;
			border: 20px solid #ff5a24;
			border-right: 20px solid #ff5a24;
			border-bottom-color: #ff5a24;
			border-left-color: transparent;
			transform: rotate(-5deg);
		}

		&::after {
			left: auto;
			right: -32px;
			width: 20px;
			border-left: 18px solid #ff5a24;
			border-right: 21px solid transparent;
			transform: rotate(5deg);
		}
	}
`;
const Ribbon = ({ text = "Ribbon" }) => {
	return <StyledRibbon className="text-cream">{text}</StyledRibbon>;
};

export default Ribbon;
