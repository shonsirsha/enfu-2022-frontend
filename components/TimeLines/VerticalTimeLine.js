import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
const OutsideContainer = styled.div`
	align-items: center;
	position: relative;
`;

const Dot = styled.div`
	width: 140px;
	height: 140px;
	border-radius: 100%;
	z-index: 12;
	border: 13px solid #fffbf0;
	box-shadow: 0 0 0 2px #f23f16;
`;

const ContentContainer = styled.div`
	position: absolute;
	z-index: 10;
	align-items: center;
	display: flex;

	&.topRight {
		right: 24%;
		bottom: 110px;
	}

	&.bottomRight {
		right: 24%;
		bottom: -44px;
	}

	&.leftCenter {
		left: 25%;
		bottom: 18%;
	}

	&.rightCenter {
		right: 25%;
		bottom: 18%;
	}

	&.upperHalf {
		left: 25%;
		bottom: 85%;
	}

	&.topRight .verticalLine {
		width: 2px;
		height: 20px;
		margin-top: 18px;
	}

	&.bottomRight .verticalLine {
		width: 2px;
		height: 20px;
		margin-top: -18px;
	}

	&.leftCenter .verticalLine {
		display: none;
	}

	&.rightCenter .verticalLine {
		display: none;
	}

	&.upperHalf .shortHorizLine {
		width: 48px;
		height: 2px;
	}

	&.upperHalf .shortHorizLine.lower {
		margin-top: auto;
	}

	&.upperHalf .longVertLine {
		width: 2px;
		height: 200px;
	}

	& .horizLine {
		width: 100px;
		height: 2px;
	}

	@media ${mediaBreakpoint.down.lg} {
		position: static;
	}

	@media (max-width: 1194px) {
		&.topRight {
			right: 14%;
			bottom: 110px;
		}

		&.bottomRight {
			right: 14%;
			bottom: -44px;
		}

		&.leftCenter {
			left: 14%;
			bottom: 18%;
		}

		&.rightCenter {
			right: 14%;
			bottom: 18%;
		}

		&.upperHalf {
			left: 14%;
			bottom: 85%;
		}

		&.topRight .verticalLine {
			width: 2px;
			height: 20px;
			margin-top: 18px;
		}

		&.bottomRight .verticalLine {
			width: 2px;
			height: 20px;
			margin-top: -18px;
		}

		&.upperHalf .shortHorizLine {
			width: 48px;
			height: 2px;
		}

		&.upperHalf .shortHorizLine.lower {
			margin-top: auto;
		}

		&.upperHalf .longVertLine {
			width: 2px;
			height: 200px;
		}

		& .horizLine {
			width: 100px;
			height: 2px;
		}
	}
`;

const TimelineContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	border-radius: 60px;
	padding: 4px 32px;
	min-height: 74px;
	min-width: 212px;
`;

const July = () => {
	return (
		<OutsideContainer
			className="w-100
              d-xl-flex d-none
              justify-content-center"
		>
			<Dot className="d-flex justify-content-center bg-secondary align-items-center">
				July
			</Dot>
			<ContentContainer className="topRight">
				<div className="bg-danger verticalLine"></div>
				<div className="bg-danger horizLine"></div>
				<TimelineContent className="bg-danger">asdsadsa</TimelineContent>
			</ContentContainer>

			<ContentContainer className="bottomRight">
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
			</ContentContainer>

			<ContentContainer className="leftCenter">
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
			</ContentContainer>
		</OutsideContainer>
	);
};

const Aug = ({ ...props }) => {
	const { className } = props;
	return (
		<OutsideContainer
			style={{ marginTop: 124 }}
			className={`w-100
              d-lg-flex d-none
              justify-content-center ${className}`}
		>
			<Dot className="d-flex justify-content-center bg-secondary align-items-center">
				Aug
			</Dot>

			<ContentContainer className="topRight">
				<div className="bg-danger verticalLine"></div>
				<div className="bg-danger horizLine"></div>
				<TimelineContent className="bg-danger">asdsadsa</TimelineContent>
			</ContentContainer>

			<ContentContainer className="bottomRight">
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
			</ContentContainer>
		</OutsideContainer>
	);
};

const Sept = ({ ...props }) => {
	const { className } = props;
	return (
		<OutsideContainer
			style={{ marginTop: 156 }}
			className={`w-100
              d-lg-flex d-none
              justify-content-center ${className}`}
		>
			<Dot className="d-flex justify-content-center bg-secondary align-items-center">
				Sept
			</Dot>

			<ContentContainer className="upperHalf">
				<TimelineContent className="bg-danger">asdsadsa</TimelineContent>
				<div className="bg-danger shortHorizLine"></div>
				<div className="bg-danger longVertLine">
					<div className="bg-danger shortHorizLine"></div>
				</div>
				<div className="bg-danger shortHorizLine lower"></div>
			</ContentContainer>

			<ContentContainer className="leftCenter">
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
			</ContentContainer>
		</OutsideContainer>
	);
};

const Oct = ({ ...props }) => {
	const { className } = props;

	return (
		<OutsideContainer
			style={{ marginTop: 156 }}
			className={`w-100
              d-lg-flex d-none
              justify-content-center ${className}`}
		>
			<Dot className="d-flex justify-content-center bg-secondary align-items-center">
				Oct
			</Dot>

			<ContentContainer className="upperHalf">
				<TimelineContent className="bg-danger">asdsadsa</TimelineContent>
				<div className="bg-danger shortHorizLine"></div>
				<div className="bg-danger longVertLine">
					<div className="bg-danger shortHorizLine"></div>
				</div>
				<div className="bg-danger shortHorizLine lower"></div>
			</ContentContainer>
		</OutsideContainer>
	);
};

const Nov = ({ ...props }) => {
	const { className } = props;
	return (
		<OutsideContainer
			className={`w-100
              d-lg-flex d-none
              justify-content-center ${className}`}
		>
			<Dot className="d-flex justify-content-center bg-secondary align-items-center">
				Nov
			</Dot>

			<ContentContainer className="leftCenter">
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
			</ContentContainer>

			<ContentContainer className="rightCenter">
				<div className="bg-orange verticalLine"></div>
				<div className="bg-orange horizLine"></div>
				<TimelineContent className="bg-orange">asdsadsa</TimelineContent>
			</ContentContainer>
		</OutsideContainer>
	);
};

const VerticalTimeLine = () => {
	return (
		<>
			<div className="d-lg-block d-none">
				<July />
				<Aug />
				<Sept />
				<Oct />
				<Nov className="mt-5" />
			</div>

			{/*MOBILE*/}
			<div
				style={{ marginTop: -86 }}
				className="d-lg-none d-flex flex-column justify-content-center"
			>
				<div className="d-flex align-items-center flex-column">
					<Dot className="d-flex justify-content-center bg-secondary align-items-center">
						Jul
					</Dot>
					<TimelineContent className="bg-danger mt-4">asdsadsa</TimelineContent>
					<TimelineContent className="bg-danger mt-3">asdsadsa</TimelineContent>
					<TimelineContent className="bg-orange mt-3">asdsadsa</TimelineContent>
				</div>

				<div className="d-flex align-items-center flex-column mt-5">
					<Dot className="d-flex justify-content-center bg-secondary align-items-center">
						Aug
					</Dot>
					<TimelineContent className="bg-danger mt-4">asdsadsa</TimelineContent>
					<TimelineContent className="bg-danger mt-3">asdsadsa</TimelineContent>
					<TimelineContent className="bg-orange mt-3">asdsadsa</TimelineContent>
				</div>

				<div className="d-flex align-items-center flex-column mt-5">
					<Dot className="d-flex justify-content-center bg-secondary align-items-center">
						Sept
					</Dot>
					<TimelineContent className="bg-danger mt-4">asdsadsa</TimelineContent>
					<TimelineContent className="bg-orange mt-3">asdsadsa</TimelineContent>
					<TimelineContent className="bg-danger mt-3">asdsadsa</TimelineContent>
				</div>

				<div className="d-flex align-items-center flex-column mt-5">
					<Dot className="d-flex justify-content-center bg-secondary align-items-center">
						Oct
					</Dot>
					<TimelineContent className="bg-danger mt-4">asdsadsa</TimelineContent>
				</div>

				<div className="d-flex align-items-center flex-column mt-5">
					<Dot className="d-flex justify-content-center bg-secondary align-items-center">
						Nov
					</Dot>
					<TimelineContent className="bg-orange mt-3">asdsadsa</TimelineContent>
					<TimelineContent className="bg-orange mt-3">asdsadsa</TimelineContent>
				</div>
			</div>
		</>
	);
};

export default VerticalTimeLine;
