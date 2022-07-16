import React, { useState } from "react";
import { SemiCircle } from "components/SemiCircle";
import styled from "styled-components";

import { mediaBreakpoint } from "utils/mediaBreakpoints";
import Image from "next/image";
import NavigationButton from "components/Buttons/Buttons";

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

	& .ap {
		font-family: Poppins;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const ImageContainer = styled.div`
	width: 120px;
	height: 120px;
	position: relative;

	transition: 0.35s all;
`;

const Subheader = styled.p`
	font-size: 24px;
	font-weight: 800;
`;

const TestimonialContentContainer = styled.div`
	padding: 24px 60px;
	border-radius: 40px;
	min-height: 320px;
	margin-left: 96px;
	width: calc(100vw - 480px);

	max-width: 1320px;

	@media ${mediaBreakpoint.down.lg} {
		width: 100%;
		margin: 0;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 24px;
	}
`;

const SemiCLeftContainer = styled.div`
	position: absolute;
	left: -120px;
	top: 50%;
	transform: translateY(-20%);

	@media ${mediaBreakpoint.down.lg} {
		left: -30px;
	}
`;

const TestimonialText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	line-height: 26px;
`;

const SemiCLeft = styled(SemiCircle)`
	width: 400px;
	height: 200px;
	transform: rotate(90deg);

	@media ${mediaBreakpoint.down.lg} {
		width: 90px;
		height: 45px;
	}

	& .imgctr {
		transform: rotate(270deg);
	}

	& .imgctr:nth-child(1) {
		margin-left: -10px;
	}

	& .imgctr:nth-child(2) {
		margin-left: 10px;
		margin-top: -90px;
	}

	& .imgctr:nth-child(3) {
		margin-left: 4px;
	}

	& .imgctr:hover {
		cursor: pointer;
		transform: scale(1.19) translate(1px, -10px) rotate(270deg);
	}

	& .imgctr.active {
		transform: scale(1.25) translate(1px, -10px) rotate(270deg);
	}
`;

const Testimonials = () => {
	const testimonials = [
		{
			name: "Syamaizar Riandi",
			position: "Universitas Indonesia",
			picture: "testi1.png",
			content:
				"The 13th ENFUTION National Seminar held by MSA FEB Undip was very inspiring and insightful. It helps us as a young generation to increase our values to face the upcoming era, just like the theme itself. I’m looking forward to the next ENFUTION National Seminar because I’m sure it will be also valuable as before. It’s definitely worth the time",
		},
		{
			name: "Vania Nabillah Ramadhani",
			position: "Universitas Gadjah Mada, 2020",
			picture: "testi3.png",
			content:
				"DBCC was such a fun experience for me, and I learned a lot not only just by doing the case with my team, but also from the coaching session held by DBCC. As someone with not much experience, it was super helpful by leading me to the right direction when cracking the case :)",
		},
		{
			name: "Renaldi Stevanus",
			position: "Hubungan Internasional Unpar’18",
			picture: "testi2.png",
			content:
				"The 13th ENFUTION has been a wonderful experience. The event brought such an impactfull insights provided by the great speakers also the committe that managed the flow. I can’t wait for the next Enfution to be the hub and keep giving Indonesia’s student impactful and insightfull knowledge on this era",
		},
	];

	const [active, setActive] = useState(1);

	const selectTesti = (ix = 0, isMobile = false, mobileDirection = "PREV") => {
		if (!isMobile) {
			setActive(ix);
			return;
		}

		if (mobileDirection === "PREV") {
			if (active === 0) {
				setActive(testimonials.length - 1);
			} else {
				setActive(active - 1);
			}
		} else {
			if (active === testimonials.length - 1) {
				setActive(0);
			} else {
				setActive(active + 1);
			}
		}
	};

	return (
		<OuterContainer
			id="testimonials"
			className="bg-cream bg-cream d-flex justify-content-center position-relative"
		>
			<SemiCLeftContainer className="d-lg-block d-none">
				<SemiCLeft className="bg-orange d-flex">
					{testimonials.map((t, ix) => (
						<ImageContainer
							onClick={() => selectTesti(ix)}
							key={t.name}
							className={`imgctr ${active === ix && `active`}`}
						>
							<Image src={`/assets/${t.picture}`} alt="Photo" layout="fill" />
						</ImageContainer>
					))}
				</SemiCLeft>
			</SemiCLeftContainer>
			<Container className="d-flex flex-column align-items-center">
				<Header className="mt-md-2  mt-1 mb-1 text-center">TESTIMONIALS</Header>
				<Subheader className="mb-md-4 mb-3 text-center text-danger">
					<i>FROM LAST YEAR{"'"}S NATIONAL SEMINAR</i>
				</Subheader>

				<TestimonialContentContainer className="shadow  bg-orange text-center align-items-center d-flex flex-column">
					<ImageContainer className={`imgctr d-lg-none d-block mb-3`}>
						<Image
							src={`/assets/${testimonials[active].picture}`}
							alt="Photo"
							layout="fill"
						/>
					</ImageContainer>

					<TestimonialText className="mb-2 text-center">
						{testimonials[active].content}
					</TestimonialText>
					<TestimonialText>
						<b>
							<i> - {testimonials[active].name}</i>
						</b>
						<br />
						<i className="text-white text-light">
							{testimonials[active].position}
						</i>
					</TestimonialText>

					<div className="d-lg-none d-flex mt-3 w-100 justify-content-center">
						<NavigationButton
							className="me-3"
							direction="L"
							onClick={() => {
								selectTesti(0, true, "PREV");
							}}
						/>
						<NavigationButton
							direction="R"
							onClick={() => {
								selectTesti(0, true, "NEXT");
							}}
						/>
					</div>
				</TestimonialContentContainer>
			</Container>
		</OuterContainer>
	);
};

export default Testimonials;
