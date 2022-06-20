import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { mediaBreakpoint } from "utils/mediaBreakpoints";
import { SemiCircle } from "components/SemiCircle";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1320px;
	padding: 32px;
	align-items: center;
	justify-content: center;
	@media (max-width: 1194px) and ${mediaBreakpoint.up.lg} {
		max-width: 996px;
	}

	& a {
		text-decoration: none;
	}
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 700;
	font-size: 56px;
	letter-spacing: 0.5px;

	@media (max-width: 1194px) and ${mediaBreakpoint.down.lg} {
		font-size: 32px;
	}
`;

const Card = styled.div`
	padding: 40px 24px;
	border-radius: 24px;
	background: ${(props) => (props.open ? `#feb01c` : `gray`)};
	width: 340px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-image: url("/assets/cardbg.png");
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: fill; /* Resize the background image to cover the entire container */

	@media (max-width: 1194px) and ${mediaBreakpoint.down.lg} {
		width: 310px;
	}
`;

const EventNameText = styled.h2`
	font-family: TT_Ramilas;
	font-size: 32px;
	line-height: 42px;
	font-weight: 500;
`;
const ContainerSCL = styled.div`
	position: absolute;
	top: 0;
	left: -22.5%;
	top: 46%;
	transform: translateY(-50%);
`;

const ContainerSCR = styled.div`
	position: absolute;
	top: 0;
	right: -22.5%;
	top: 46%;
	transform: translateY(-50%);
`;
const SemiCircleLeft = styled(SemiCircle)`
	height: 33px;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	transform: rotate(270deg);
	width: 120px;
	background: #88ccf9;
`;

const SemiCircleRight = styled(SemiCircle)`
	height: 33px;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	width: 120px;
	transform: rotate(90deg);
	background: #88ccf9;
`;

const RegisterForContainer = styled.div`
	padding: 2px 32px;
	border-radius: 32px;
	border: 3px #ff5a24 solid;
`;

const RegisterForText = styled.p`
	font-family: Poppins;
	font-weight: 500;
	font-size: 32px;
	font-style: italic;
`;

const Separator = styled.div`
	height: 120px;
	width: 4px;
	background: #000;
`;

const DBCC = ({ config }) => {
	const {
		regist_dbcc_open,
		regist_coaching_session_open,
		regist_coaching_clinic_open,
	} = config;

	return (
		<div
			className="bg-cream d-flex justify-content-center align-items-start"
			style={{ minHeight: "100vh" }}
		>
			<Container>
				<div className="d-flex align-items-center justify-content-center mb-5 flex-lg-row flex-column ">
					<Image
						src={"/assets/dbcclogolarge.png"}
						width={141}
						height={138}
						alt="Logo"
					/>
					<Separator className="mx-4 d-none d-lg-block" />
					<Header className="mt-lg-0 mt-4 text-lg-start text-center">
						DIPONEGORO BUSINESS <br /> CASE COMPETITION{" "}
						<span className="text-orange">2022</span>
					</Header>
				</div>

				<RegisterForContainer className="mb-5">
					<RegisterForText>REGISTER FOR:</RegisterForText>
				</RegisterForContainer>
				<div className="d-flex w-100 justify-content-center mt-3 flex-lg-row flex-column align-items-lg-stretch align-items-center">
					<div className="position-relative mx-lg-5 mx-0 ">
						{regist_dbcc_open ? (
							<Link href="./register/dbcc">
								<a>
									<Card open={1}>
										<EventNameText className="text-white text-center">
											Diponegoro Business Case Competition
										</EventNameText>
									</Card>{" "}
								</a>
							</Link>
						) : (
							<Card open={0}>
								<EventNameText className="text-white text-center">
									Diponegoro Business Case Competition{" "}
									<u>
										<i>Closed</i>
									</u>
								</EventNameText>
							</Card>
						)}

						<ContainerSCL className="d-none d-lg-block">
							<SemiCircleLeft />
						</ContainerSCL>
						<ContainerSCR className="d-none d-lg-block">
							<SemiCircleRight />
						</ContainerSCR>
					</div>
					<div className="position-relative mx-lg-5 mx-0 my-lg-0 my-4">
						{regist_coaching_session_open ? (
							<Link href="./register/coaching-session">
								<a>
									<Card open={1}>
										<EventNameText className="text-white text-center">
											Coaching <br /> Session
										</EventNameText>
									</Card>
								</a>
							</Link>
						) : (
							<Card open={0}>
								<EventNameText className="text-white text-center">
									Coaching <br /> Session{" "}
									<u>
										<i>Closed</i>
									</u>
								</EventNameText>
							</Card>
						)}

						<ContainerSCL className="d-none d-lg-block">
							<SemiCircleLeft />
						</ContainerSCL>
						<ContainerSCR className="d-none d-lg-block">
							<SemiCircleRight />
						</ContainerSCR>
					</div>

					<div className="position-relative mx-lg-5 mx-0">
						{regist_coaching_clinic_open ? (
							<Link href="./register/coaching-clinic">
								<a>
									<Card open={1}>
										<EventNameText className="text-white text-center">
											Coaching <br /> Clinic
										</EventNameText>
									</Card>
								</a>
							</Link>
						) : (
							<Card open={0}>
								<EventNameText className="text-white text-center">
									Coaching <br /> Clinic
								</EventNameText>
							</Card>
						)}

						<ContainerSCL className="d-none d-lg-block">
							<SemiCircleLeft />
						</ContainerSCL>
						<ContainerSCR className="d-none d-lg-block">
							<SemiCircleRight />
						</ContainerSCR>
					</div>
				</div>
			</Container>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const config = (await res.json()).result[0];

	return {
		props: {
			config: config ? config : null,
		},

		revalidate: 1,
	};
}

export default DBCC;
