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

const FlipCardContainer = styled.div`
	background-color: transparent;
	border-radius: 32px;
	height: 390px;
	width: 390px;
	border: 1px solid #f1f1f1;
	perspective: 1000px;
	&:hover .inner {
		transform: rotateY(180deg);
	}

	@media ${mediaBreakpoint.down.lg} {
		height: 400px;
		width: 400px;
	}

	@media ${mediaBreakpoint.down.md} {
		height: 500px;
		width: 320px;
	}
`;

const FlipCardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
`;

const FlipCardFace = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
	border-radius: 32px;

	&.flip-card-front {
		background-color: #bbb;
		color: black;
		padding: 8px;
		align-items: center;
		justify-content: center;
		display: flex;

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	&.flip-card-front.bg.knowledge {
		background-image: linear-gradient(0deg, #d37502b8, #d37502b8),
			url("/assets/knowledge.png");
	}

	&.flip-card-front.bg.skill {
		background-image: linear-gradient(0deg, #d37502b8, #d37502b8),
			url("/assets/skill.png");
	}

	&.flip-card-front.bg.inspirational {
		background-image: linear-gradient(0deg, #d37502b8, #d37502b8),
			url("/assets/inspirational.png");
	}

	&.flip-card-back {
		color: white;
		transform: rotateY(180deg);
		padding: 16px;
	}
`;

const BlockText = styled.p`
	font-family: Poppins;
	font-weight: 600;
	font-size: 36px;
`;

const BlockBodyText = styled.p`
	font-size: 15px;
	font-weight: 200;

	& .bold {
		font-weight: 600;
		font-size: 18px;
	}
`;

const FlipBlock = ({
	className = "",
	front = <></>,
	back = <></>,
	bg = "",
}) => {
	return (
		<FlipCardContainer className={`${className}`}>
			<FlipCardInner className="inner">
				<FlipCardFace className={`flip-card-front bg-orange bg ${bg}`}>
					{front}
				</FlipCardFace>
				<FlipCardFace className="flip-card-back  bg-orange">
					{back}
				</FlipCardFace>
			</FlipCardInner>
		</FlipCardContainer>
	);
};

const WhyShouldYouJoin = () => {
	return (
		<OuterContainer className="bg-cream bg-cream d-flex justify-content-center">
			<Container className="d-flex flex-column align-items-center">
				<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
					WHY <span className="text-danger">SHOULD</span> YOU JOIN ?
				</Header>

				<div className="d-flex justify-content-center align-items-center flex-lg-row flex-column w-100 mt-4">
					<FlipBlock
						bg="knowledge"
						front={
							<>
								<BlockText className="text-cream">KNOWLEDGE</BlockText>
							</>
						}
						back={
							<>
								<BlockBodyText>
									<span className="bold">Knowledge</span> is just like a candle.
									It is always burning to light up the world. Knowledge can give
									you respect, wealth, and happiness. One day, your knowledge
									will be passed on and still alive in some form or another. If
									you want to be that candle, National Seminar is the right
									choice to develop and gain knowledge. In this event, you will
									meet excellent people with different backgrounds. So, they
									will help you by telling you their knowledge and experiences.
								</BlockBodyText>
							</>
						}
					/>
					<FlipBlock
						bg="skill"
						front={
							<>
								<BlockText className="text-cream">SKILL</BlockText>
							</>
						}
						back={
							<>
								<BlockBodyText>
									<span className="bold">In dealing with everything</span>, we
									must also be faced with various challenges. Especially in
									today{"'"}s technological era. As well as increasingly fierce
									competition. Sometimes, this makes us lazy and afraid to
									develop our potential. The National Seminar was present as an
									answer to the unrest. Through this event, you will get
									interesting tips and inspirational stories from cool and
									expert speakers. So, you can overcome challenges in the future
									and restore motivation to proceed, of course.
								</BlockBodyText>
							</>
						}
						className="mx-lg-4 mx-0 my-lg-0 my-4"
					/>

					<FlipBlock
						bg="inspirational"
						front={
							<>
								<BlockText className="text-cream">INSPIRATIONAL</BlockText>
							</>
						}
						back={
							<>
								<BlockBodyText>
									<span className="bold">We do not exactly</span> know what will
									happen in the future. We only can expect what challenges we
									have to face in the future. Developing skills is the way for
									preparing ourselves to get ready to face the future. By that
									time, the evolution of technology will be more sophisticated.
									It does not just give us a simplicity for doing something,
									therefore it will make more challenges for us as a gen-z,
									especially for our careers. National Seminar is the one of
									preparatory steps to get a new insight into future challenges
									and how we should face it. We invite speakers that have a
									bunch of knowledge and experience about adaptation in the
									technology transformation era. In National Seminar, you won
									{"'"}t only get theories, but also you will get skills to
									practice in your life.
								</BlockBodyText>
							</>
						}
					/>
				</div>
			</Container>
		</OuterContainer>
	);
};

export default WhyShouldYouJoin;
