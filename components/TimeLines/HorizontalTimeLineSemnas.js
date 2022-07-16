import React from "react";
import styled from "styled-components";

const Container = styled.div`
	& .pointsContainer {
		.pointStrandInner .point {
			background: #FF5A24;
		}

		.pointStrandInner:nth-child(even) {
			margin-top: 46px;
		}

		.pointStrandInner:nth-child(odd) {
			    margin-bottom: 6px;
		}


	}

		.pointStrandInner:last-child .textContainer {
		}

		.rev {
			margin-bottom: -130px;
		}
	}

	@media only screen and (max-width: 1250px) {

		
		& .pointsContainer {
			flex-direction: column;

			.rev {
				margin-bottom: 0;
			}

			.pointStrandInner:nth-child(even) {
				margin-top: 0;
			}

			.pointStrandInner:nth-child(odd) {
			    margin-bottom: 0;
			}	
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
	margin-left: -100px;

	@media only screen and (max-width: 1250px) {
		margin: 0;
	}
`;

const DescriptionText = styled.p`
	font-family: Poppins;
	font-weight: 400;
	margin-left: 0;
	max-width: ${(props) => (props.small ? `140px` : `auto`)};
	font-style: Italic;
`;

const Strand = styled.div`
	height: 6px;
	width: 160px;
	background: black;
	margin-left: -4px;
	z-index: 1;

	@media only screen and (max-width: 1250px) {
		width: 6px;
		height: 200px;
		margin: 0;
	}
`;

const OuterTextContainer = styled.div`
	margin-top: ${(props) => (props.small ? `100px` : `0`)};

	@media only screen and (max-width: 1250px) {
		margin: 0;
	}
`;

const OrangeContainer = styled.div`
	padding: 8px 16px;
	border-radius: 24px;
	min-width: 240px;
`;

const BlueContainer = styled.div`
	padding: 8px 16px;
	border-radius: 8px;
	min-width: 220px;
`;

const PointStrand = ({ className, data, ix, small, last = false }) => (
	<OuterTextContainer
		small={small ? 1 : 0}
		className={`d-flex pointStrandInner ${
			ix % 2 !== 0
				? `display-none flex-lg-column-reverse flex-column rev`
				: `flex-column`
		} `}
	>
		<TextContainer
			className={`justify-content-center textContainer align-items-center  ${
				ix % 2 !== 0 ? `mt-lg-3 mt-0` : `mb-lg-2 mb-0`
			}`}
		>
			<OrangeContainer className={`bg-orange shadow-sm`}>
				<DateText className="text-center">
					{data.dateStart && (
						<>
							{data.dateStart} <span>-</span>{" "}
						</>
					)}
					{data.dateEnd}
				</DateText>
			</OrangeContainer>

			<BlueContainer className="bg-secondary shadow-sm">
				<DescriptionText className="text-center" small={small}>
					{data.text}
				</DescriptionText>
			</BlueContainer>
		</TextContainer>

		<div className={className}>
			<Point className="point" />
			{!last && <Strand />}
		</div>
	</OuterTextContainer>
);

const HorizontalTimeLineSemnas = ({ data = [], className }) => {
	return (
		<Container className={`d-flex ${className}`}>
			<div className="pointsContainer d-flex align-items-center">
				{data.map((z, ix) => (
					<PointStrand
						ix={ix}
						key={z.id}
						data={z}
						small={z.small ? z.small : false}
						last={data.length - 1 === ix}
						className="pointStrand d-flex align-items-center"
					/>
				))}
			</div>
		</Container>
	);
};

export default HorizontalTimeLineSemnas;
