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
	font-weight: 600;
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
const Card = ({
	text = "",
	style,
	href = "",
	circleLeft,
	open = true,
	...props
}) => {
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
				{open ? (
					<Link href={href}>
						<a>
							<MyButton
								disabled={!open}
								className="bg-black mt-3 w-100"
								textColor="primary"
							>
								Register Now
							</MyButton>
						</a>
					</Link>
				) : (
					<MyButton
						disabled={!open}
						className="bg-black mt-3 w-100"
						textColor="primary"
					>
						Closed
					</MyButton>
				)}
			</div>
		</div>
	);
};

const EventsSection = ({ config }) => {
	const {
		regist_dbcc_open,
		regist_semnas_open,
		regist_sharing_session_open,
		regist_coaching_session_open,
		regist_coaching_clinic_open,
	} = config;
	console.log("config", regist_dbcc_open);
	return (
		<div id="events" className="bg-secondary">
			<StyledContainer className="bg-orange">
				<InnerContainer className="position-relative bg-cream d-flex flex-column align-items-center ">
					<div className="d-md-block d-none">
						<StyledSemiCircleSmallLeft className="bg-orange" />
						<StyledSemiCircleSmallRight className="bg-orange" />
					</div>

					<Header>Events </Header>

					<div className="d-flex flex-lg-row flex-column my-5">
						<div className="me-lg-5 me-0 mb-lg-0 mb-5">
							<Card
								open={regist_sharing_session_open}
								text="TALK INC"
								href="/national-seminar/register/talk-inc"
							/>
						</div>
						<Card
							open={regist_semnas_open}
							text="NATIONAL SEMINAR"
							href="/national-seminar/register/national-seminar"
						/>
					</div>

					<div className="d-flex flex-lg-row flex-column">
						<div className="me-lg-5 me-0 mb-lg-0 mb-5">
							<Card
								open={regist_coaching_session_open}
								text="COACHING SESSION"
								href="/dbcc/register/coaching-session"
							/>
						</div>
						<Card
							open={regist_coaching_clinic_open}
							text="COACHING CLINIC"
							href="/dbcc/register/coaching-clinic"
						/>
					</div>

					<div className="mt-5">
						<Card
							open={regist_dbcc_open}
							text="DIPONEGORO BUSINESS CASE COMPETITION"
							href="/dbcc/register/dbcc"
						/>
					</div>
				</InnerContainer>
			</StyledContainer>
		</div>
	);
};

export default EventsSection;
