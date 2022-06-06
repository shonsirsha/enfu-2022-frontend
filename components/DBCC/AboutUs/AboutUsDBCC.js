import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import HorizontalTimeLine from "components/TimeLines/HorizontalTimeLine";
import MyButton from "components/Buttons/MyButton";
import Link from "next/link";
const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	alignitems: center;
	padding-top: 64px;

	& .dbccContainer {
		z-index: 3;
		margin-bottom: -48px;
	}
	padding-bottom: 64px;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 56px;
	letter-spacing: 0.5px;

	@media (max-width: 1194px) and ${mediaBreakpoint.down.lg} {
		font-size: 32px;
	}
`;
const InnerPillContainer = styled.div`
	padding: 40px 56px;
	width: 100%;
	display: flex;
	border-radius: 120px;
	border: 28px solid #88ccf9;
`;

const Separator = styled.div`
	height: 120px;
	width: 4px;
	background: #000;
`;

const Container = styled.div`
	max-width: 1320px;
`;

const AboutUsText = styled.p`
	font-size: 21px;
	line-height: 24px
    letter-spacing: 1.1px;
	fong-weight: 400;
`;

const AboutUsContainer = styled.div`
	padding: 180px 24px;
	border-radius: 100px;
`;

const TimelineTitleText = styled.p`
	font-size: 32px;
	font-family: TT_Ramilas;
	font-weight: 700;
`;

const StyledButton = styled(MyButton)`
	width: 180px;
	border-radius: 12px;
	padding: 8px 16px;
`;

const RegisterNowButtonText = styled.p`
font-weight: 600;
font-style: Italic;
margin: 0;
font-size: 18px;
line-height; 18px;
text-transform: uppercase;
`;

const ImageContainer = styled.div`
	width: 128px;
	height: 128px;
	position: relative;
`;

const AboutUsDBCC = () => {
	const timelineDbccSmall = [
		{
			dateStart: "16 JUL",
			dateEnd: "2 SEPT 2022",
			text: "Registration",
		},

		{
			dateStart: null,
			dateEnd: "3 SEPT 2022",
			text: "Grand Opening",
		},

		{
			dateStart: "3",
			dateEnd: "17 SEPT 2022",
			text: "Preliminary Stage",
		},

		{
			dateStart: "3",
			dateEnd: "13 OCT 2022",
			text: "Semifinal Stage",
		},
		{
			dateStart: "28",
			dateEnd: "10 NOV 2022",
			text: "Final Stage",
		},

		{
			dateStart: null,
			dateEnd: "13 NOV 2022",
			text: "Enfution Summit",
		},
	];
	return (
		<OuterContainer className="bg-secondary align-items-center ">
			<Container className="dbccContainer">
				<InnerPillContainer className="bg-cream align-items-lg-center justify-content-lg-center align-items-center flex-lg-row flex-column">
					<ImageContainer>
						<Image src={"/assets/dbcclogolarge.png"} layout="fill" alt="Logo" />
					</ImageContainer>

					<Separator className="mx-4 d-none d-lg-block" />
					<Header className="mt-lg-0 mt-4 text-lg-start text-center">
						DIPONEGORO BUSINESS <br /> CASE COMPETITION{" "}
						<span className="text-orange">2022</span>
					</Header>
				</InnerPillContainer>
			</Container>

			<AboutUsContainer className="shadow bg-orange align-items-center justify-content-center w-100">
				<Container className=" d-flex flex-column justify-content-center mx-auto">
					<AboutUsText className="text-white mb-5">
						<span className="text-danger">
							<b>Diponegoro Business Case Competition (DBCC)</b>
						</span>{" "}
						is a competition that is held annually as part of ENFUTION. This
						program is an international-scale business case competition aimed at
						undergraduate students from all universities in Indonesia and
						internationally. Participant will solve a case that is relevant to
						the business conditions of the company. This year{"'"}s theme is{" "}
						<i>
							<b className="text-danger">
								“Eternal Economic Prosperity by Maximizing Smart Technology”
							</b>
						</i>
						. This theme is inspired by the process of human transition towards
						Society 5.0. In this era, humans do not only coexist with technology
						such as in the Industry 4.0 era. Furthermore, humans must be able to
						connect with existing technologies to achieve sustainable and
						lasting prosperity. That is, technology needs to be utilized for the
						prosperity of all individuals and the balance of nature. Therefore,
						this theme is considered suitable to be raised because the
						participants are the younger generation who will enter and lead in
						the era of Society 5.0.
					</AboutUsText>

					<TimelineTitleText className="mt-5 mb-3 ms-auto">
						TIMELINE<span className="text-danger">.</span>
					</TimelineTitleText>
					<HorizontalTimeLine
						data={timelineDbccSmall}
						className="justify-content-center mt-5 mb-4"
					/>

					<Link href="./register/dbcc">
						<StyledButton
							variant={"secondary"}
							textColor="black"
							className="shadow mx-auto mt-5"
						>
							<RegisterNowButtonText>Register Now</RegisterNowButtonText>
						</StyledButton>
					</Link>
				</Container>
			</AboutUsContainer>
		</OuterContainer>
	);
};

export default AboutUsDBCC;
