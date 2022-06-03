import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Slider from "react-slick";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	min-height: 100vh;
	position: relative;
	padding-bottom: 240px;
	align-items: stretch;
`;

const InnerContainer = styled.div`
	width: 100%;
	border-bottom-left-radius: 13%;
	border-bottom-right-radius: 13%;
	& .cardWrapper {
		@media ${mediaBreakpoint.down.lg} {
			padding: 0 48px;
		}
	}
	& .slick-slider {
		transform: translateY(100px);
	}

	& .slick-arrow {
		display: block;
		z-index: 10;
		background: transparent;
	}

	& .slick-prev {
		left: 45px;
	}

	& .slick-next {
		right: 65px;
	}

	& .slick-dots {
		bottom: 6px;
	}

	& .slick-dots li,
	& .slick-dots li button,
	.slick-dots li button:before {
		width: 20px;
		height: 20px;
		font-size: 20px;
	}

	& .slick-prev:before,
	.slick-next:before {
		font-size: 48px;
		color: black;
		opacity: 1;
	}

	& .slick-dots li.slick-active button:before {
		opacity: 1;
		color: #feb01c;
	}

	& .slick-dots li button:before {
		opacity: 1;
		color: #fff;
	}

	@media ${mediaBreakpoint.down.lg} {
		& .slick-prev {
			left: 15px;
		}

		& .slick-next {
			right: 26px;
		}

		& .slick-prev:before,
		.slick-next:before {
			font-size: 32px;
		}
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 32px;
	padding: 56px;
	max-width: 1090px;
	min-height: 459px;

	@media ${mediaBreakpoint.down.lg} {
		padding: 24px;
		min-height: 700px;
		padding-bottom: 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 24px;

		min-height: 950px;
	}
`;

const NameText = styled.p`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 32px;
	line-height: 32px;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-size: 56px;
	font-weight: 600;
	line-height: 56px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const TeamNameText = styled.p`
	font-weight: 800;
	font-size: 23px;
	font-style: Italic;
	letter-spacing: 0.9px;
`;

const TestimonialText = styled.p`
	font-weight: 500;
	font-size: 19px;
	white-space: pre-line;
	@media ${mediaBreakpoint.down.md} {
		font-size: 16px;
	}
`;

const PhotoContainer = styled.div`
	width: 240px;
	height: 240px;
	position: relative;
	flex-shrink: 0;
`;
const TestimonialCard = ({
	name = "Sean Liesanggoro",
	teamName = "Poxy Team - 1st Place DBCC 2021",
	testimonialText = "Impression of the DBCC event is very well prepared, the committee is fast response, everything is good and on time, the judges and the case also looks professional. Benefit of this event is improving critical & structural thinking, presentation skills, time management, communication of team work and leadership skills. \n \n Thank you for providing a place to grow as a team and as a person! Definitely one of the best business case competitions I've ever participated in organized by an organization/noncompany.",
	image = `1`,
}) => {
	return (
		<CardContainer className="bg-secondary mt-auto shadow mx-auto w-100">
			<div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
				<PhotoContainer className="me-lg-3">
					<Image
						src={`/assets/testimonials/${image}.png`}
						alt="Testimonial"
						layout="fill"
					/>
				</PhotoContainer>

				<div className="d-flex flex-column ms-lg-5 me-0">
					<NameText className="text-danger">{name}</NameText>
					<TeamNameText className="mt-2 text-white">{teamName}</TeamNameText>
					<TestimonialText className="mt-3">{testimonialText}</TestimonialText>
				</div>
			</div>
		</CardContainer>
	);
};

const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<OuterContainer className="bg-orange">
			<InnerContainer className="bg-cream shadow align-items-center justify-content-center pt-5">
				<Header className="text-center ">TESTIMONIALS</Header>

				<Slider {...settings}>
					<div className="cardWrapper">
						<TestimonialCard
							name="Bonifacius Jove Utama"
							teamName="Poxy Team  - 1st Winner DBCC 2021"
							testimonialText={`Impression of the DBCC event is very well prepared, the committee is fast response, everything is good and on time, the judges and the case also looks professional. Benefit of this event is improving critical & structural thinking, presentation skills, time management, communication of team work and leadership skills.
                            
                            Thank you for providing a place to grow as a team and as a person! Definitely one of the best business case competitions I've ever participated in organized by an organization/noncompany.`}
							image={`1`}
						/>
					</div>

					<div className="cardWrapper">
						<TestimonialCard
							name="Al Razi Radja Haikal"
							teamName="SM Consulting Team  - 3rd Winner DBCC 2021"
							testimonialText={`Taking part in being a DBCC participant is one of the best decisions and experiences for our team in 2021. The entire series at DBCC provides new knowledge and insights in solving Business Cases from real multinational companies, which of course inspires critical and creative thinking skills. It was also a big surprise for us to be ranked 3rd after competing with dozens of other teams from various countries.
                            `}
							image={`2`}
						/>
					</div>
				</Slider>
			</InnerContainer>
		</OuterContainer>
	);
};

export default Testimonials;
