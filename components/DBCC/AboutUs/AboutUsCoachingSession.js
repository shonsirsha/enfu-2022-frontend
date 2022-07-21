import React, { useState } from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import HorizontalTimeLine from "components/TimeLines/HorizontalTimeLine";
import MyButton from "components/Buttons/MyButton";
import Link from "next/link";
import NavigationButton from "components/Buttons/Buttons";

const OuterContainer = styled.div`
	min-height: 100vh;
`;

const InnerContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 0;

	& .dbccContainer {
		z-index: 3;
		margin-bottom: -48px;
	}
	overflow-x: hidden;
	padding-bottom: 120px;
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

const Circle = styled.div`
	width: 120px;
	height 340px;
    border-radius: 100%;
    position: absolute;
    left: -80px;
    top: 50%;
    transform: translateY(-50%);
`;

const CircleRight = styled.div`
	width: 120px;
	height 340px;
    border-radius: 100%;
    position: absolute;
    left: unset;
    right: -80px;
    top: 50%;
    transform: translateY(-50%);
`;

const AboutUsCoachingSession = () => {
	const [timelineShown, setTimelineShown] = useState("small");

	const handleClick = () => {
		setTimelineShown(timelineShown === "small" ? "big" : "small");
	};

	const timelineDbccSmall = [
		{
			dateStart: "16 JUL",
			dateEnd: "7 SEPT 2022",
			text: "Registration",
		},

		{
			dateStart: null,
			dateEnd: "10 SEPT 2022",
			text: "D-Day Coaching Session",
		},
	];

	const timelineComplete = [
		{
			dateStart: "16 JUL",
			dateEnd: "20 JUL 2022",
			text: "Early Bird Registration",
		},

		{
			dateStart: null,
			dateEnd: "28 OCT 2022",
			text: "Open Registration",
		},
		{
			dateStart: null,
			dateEnd: "31 OCT 2022",
			text: "Close Registration",
		},
	];

	return (
		<OuterContainer className="bg-cream ">
			<InnerContainer className="bg-secondary">
				<Container>
					<AboutUsContainer className=" bg-cream align-items-center justify-content-center w-100 position-relative">
						<Circle className="bg-secondary " />
						<CircleRight className="bg-secondary" />
						<Container className=" d-flex flex-column justify-content-center mx-auto">
							<Header className="text-center">COACHING SESSION</Header>
							<AboutUsText className="my-5">
								<b className="text-orange">Coaching Session</b> is a pre-event
								from DBCC in form of workshop, which is an innovation from the
								14th ENFUTION. Participants of this event can come from within
								and outside the country, can also from outside DBCC
								participants. Participants will discuss and also be guided by a
								great mentor to solve business cases excellently. The event will
								also facilitate participants by giving case to be solved in the{" "}
								<b className="text-orange">{`"One Day Case"`} </b>
								segment and present those case solution in{" "}
								<b className="text-orange">{`"Case Analysis"`}</b> segment. In
								this event there will be three winner and get a prize. So, for
								those interested in solving business cases, don{"'"}t miss it
								and join us!
							</AboutUsText>

							<TimelineTitleText className="mt-5 mb-3 ms-auto">
								TIMELINE.
							</TimelineTitleText>

							{timelineShown === "small" ? (
								<HorizontalTimeLine
									data={timelineDbccSmall}
									className="justify-content-center mt-5 mb-4"
								/>
							) : (
								<HorizontalTimeLine
									data={timelineComplete}
									className="justify-content-center mt-5 mb-4"
								/>
							)}

							<div className="mt-5">
								<div className="my-5 d-flex align-items-center w-100 justify-content-center">
									<NavigationButton className="me-auto" onClick={handleClick} />
									<NavigationButton direction="R" onClick={handleClick} />
								</div>
							</div>

							<Link href="./register/coaching-session">
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
				</Container>
			</InnerContainer>
		</OuterContainer>
	);
};

export default AboutUsCoachingSession;
