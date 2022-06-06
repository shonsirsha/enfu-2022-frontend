import React from "react";
import styled from "styled-components";

const Container = styled.div`
	& .pointsContainer {
		.pointStrandInner:nth-child(odd) .point {
			background: #88ccf9;
		}

		.pointStrandInner:nth-child(even) .point {
			background: #fff;
			border: 6px solid #ff5a24;
		}

		.pointStrandInner:last-child .textContainer {
			margin-left: -80px;
		}
	}

	@media only screen and (max-width: 1250px) {
		& .pointsContainer {
			flex-direction: column;
		}

		& .pointStrand {
			flex-direction: column;
		}
		& .pointsContainer .pointStrandInner:last-child .textContainer {
			margin: 0;
		}
	}
`;
const Point = styled.div`
	width: 32px;
	height: 32px;
	z-index: 2;
	border-radius: 100%;
`;

const DateText = styled.p`
	margin: 0;
	font-family: TT_Ramilas;
	font-size: 16px;
	font-height: 16px;
	font-weight: 700;
	& span {
		font-family: Poppins;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: -180px;

	@media only screen and (max-width: 1250px) {
		margin: 0;
	}
`;

const DescriptionText = styled.p`
	font-family: Poppins;
	font-weight: 400;
	margin-left: 0;
	font-style: Italic;
`;

const Strand = styled.div`
	height: 6px;
	width: 200px;
	background: black;
	margin-left: -4px;
	z-index: 1;

	@media only screen and (max-width: 1250px) {
		width: 6px;
		height: 200px;
		margin: 0;
	}
`;

const PointStrand = ({ className, data, last = false }) => (
	<div className={`d-flex flex-column pointStrandInner flex-column `}>
		<TextContainer className="justify-content-center textContainer align-items-center mb-lg-3 my-lg-0 mt-4 mb-4">
			<DateText>
				{data.dateStart && (
					<>
						{data.dateStart} <span>-</span>{" "}
					</>
				)}
				{data.dateEnd}
			</DateText>
			<DescriptionText>{data.text}</DescriptionText>
		</TextContainer>

		<div className={className}>
			<Point className="point" />
			{!last && <Strand />}
		</div>
	</div>
);

const HorizontalTimeLine = ({ data = [], className }) => {
	return (
		<Container className={`d-flex ${className}`}>
			<div className="pointsContainer d-flex align-items-center">
				{data.map((z, ix) => (
					<PointStrand
						key={z.id}
						data={z}
						last={data.length - 1 === ix}
						className="pointStrand d-flex align-items-center"
					/>
				))}
			</div>
		</Container>
	);
};

export default HorizontalTimeLine;
