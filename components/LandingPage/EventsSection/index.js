import MyButton from "components/Buttons/MyButton";
import Link from "next/link";
import { SemiCircle } from "components/SemiCircle";
import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledContainer = styled.div`
	z-index: 2;
	padding: 128px 0;
	border-radius: 104px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${mediaBreakpoint.down.md} {
		padding: 64px 0;
	}
`;

const InnerContainer = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 24px 16px;
	padding-bottom: 90px;
	border-radius: 16px;
	@media (max-width: 1194px) and ${mediaBreakpoint.up.lg} {
		max-width: 996px;
		margin-top: -164px;
	}

	min-height: 480px;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-size: 64px;
	line-height: 64px;
`;

const StyledCard = styled.div`
	border-radius: 16px;
	padding: 16px;
	height: 200px;
	width: 340px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	position: relative;
	padding-left: 40px;
`;

const CardText = styled.p`
	font-size: 32px;
	font-family: Poppins;
	font-weight: 700;
`;

const StyledSemiCircle = styled(SemiCircle)`
	background: #ff5a24;
	position: absolute;
	transform: rotate(90deg);
	left: -25px;
`;

const StyledSemiCircleSmallLeft = styled(SemiCircle)`
	background: #fdaf1b;
	position: absolute;
	transform: rotate(90deg);
	left: -16px;
	top: 132px;
	width: 64px;
	height: 32px;
`;

const StyledSemiCircleSmallRight = styled(StyledSemiCircleSmallLeft)`
	right: 0;
	transform: rotate(270deg);
	left: calc(100% - 48px);
`;
const Card = ({ text = "", style, href = "", circleLeft, ...props }) => {
	const { className } = props;
	return (
		<div className="d-flex flex-column">
			<StyledCard
				circleleft={circleLeft ? 1 : 0}
				style={style}
				className={`bg-secondary ${className}`}
			>
				<StyledSemiCircle />
				<CardText className="text-white text-center">{text}</CardText>
			</StyledCard>

			<div className="mx-auto w-100 px-5">
				<Link href={href}>
					<a>
						<MyButton className="bg-black mt-3 w-100" textColor="primary">
							Register Now
						</MyButton>
					</a>
				</Link>
			</div>
		</div>
	);
};

const EventsSection = () => {
	return (
		<div className="bg-secondary">
			<StyledContainer className="bg-orange">
				<InnerContainer className="position-relative bg-cream d-flex flex-column align-items-center ">
					<div className="d-md-block d-none">
						<StyledSemiCircleSmallLeft />
						<StyledSemiCircleSmallRight />
					</div>

					<Header>Events</Header>

					<div className="d-flex flex-lg-row flex-column my-5">
						<div className="me-lg-5 me-0 mb-lg-0 mb-5">
							<Card text="SHARING SESSION" href="/national-seminar" />
						</div>
						<Card text="NATIONAL SEMINAR" href="/national-seminar" />
					</div>

					<div className="d-flex flex-lg-row flex-column">
						<div className="me-lg-5 me-0 mb-lg-0 mb-5">
							<Card text="COACHING SESSION" href="/dbcc" />
						</div>
						<Card text="DIPONEGORO BUSINESS CASE COMPETITION" href="/dbcc" />
					</div>
				</InnerContainer>
			</StyledContainer>
		</div>
	);
};

export default EventsSection;