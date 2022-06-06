import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import HorizontalTimeLine from "components/TimeLines/HorizontalTimeLine";
import MyButton from "components/Buttons/MyButton";
import Link from "next/link";
const OuterContainer = styled.div`
	min-height: 100vh;
	padding-bottom: 120px;
`;

const InnerContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	& .dbccContainer {
		z-index: 3;
		margin-bottom: -48px;
	}
	overflow-x: hidden;
	padding: 48px 64px;
	padding-left: 0;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 56px;
	letter-spacing: 0.5px;

	@media (max-width: 1194px) and ${mediaBreakpoint.down.lg} {
		font-size: 32px;
	}
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
	padding: 64px;

	border-top-right-radius: 140px;
	border-bottom-right-radius: 140px;
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

const AboutUsCoachingSession = () => {
	const timelineDbccSmall = [
		{
			dateStart: "16 JUL",
			dateEnd: "31 OCT 2022",
			text: "Registration",
		},

		{
			dateStart: null,
			dateEnd: "5 NOV 2022",
			text: "Coaching Clinic",
		},
	];
	return (
		<OuterContainer className="bg-cream ">
			<InnerContainer className="bg-secondary">
				<AboutUsContainer className=" bg-orange align-items-center justify-content-center w-100 position-relative">
					<Container className=" d-flex flex-column justify-content-center mx-auto">
						<Header className="text-center">
							<span className="text-cream">COACHING</span> CLINIC
						</Header>
						<AboutUsText className="my-5 text-cream">
							<b className="text-black">Coaching Clinic</b> is a new innovation
							from DBCC. The participants of this event are only{" "}
							<b className="text-black">for 20 first buyers teams</b> of
							coaching clinic and also participate in the DBCC event.
							Participants will discuss one on one with the best professionals
							regarding the papers submitted or ever made by participants. The
							paper will be reviewed about strengths and weaknesses that need to
							be improved. In addition, participants will also be given direct
							guidance to improve the quality of analyzing and solving business
							problems. The question and answer session will also be more open
							to each other so it is hoped that participants can really
							understand and get best insights. So don{"'"}t miss this awesome
							opportunity!
						</AboutUsText>

						<TimelineTitleText className="mt-5 mb-3 ms-auto">
							TIMELINE.
						</TimelineTitleText>
						<HorizontalTimeLine
							data={timelineDbccSmall}
							className="justify-content-center mt-5 mb-4"
						/>

						<Link href="./register/dbcc">
							<StyledButton
								variant={"danger"}
								textColor="black"
								className="shadow mx-auto mt-5"
							>
								<RegisterNowButtonText>Register Now</RegisterNowButtonText>
							</StyledButton>
						</Link>
					</Container>
				</AboutUsContainer>
			</InnerContainer>
		</OuterContainer>
	);
};

export default AboutUsCoachingSession;
