import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import HorizontalTimeLineSemnas from "components/TimeLines/HorizontalTimeLineSemnas";

const OuterContainer = styled.div`
	display: flex;
	padding: 64px 32px;
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 120px 160px;
	padding-top: 40px;
	padding-bottom: 140px;

	border-radius: 80px;
	border-top-left-radius: 0;
	border-bottom-right-radius: 0;
	min-height: 360px;
	@media ${mediaBreakpoint.down.lg} {
		padding: 40px 64px;
	}

	@media ${mediaBreakpoint.down.md} {
		padding: 32px;
	}
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

const TimelineSharingSessionTwo = () => {
	const timelineDbccSmall = [
		{
			dateStart: null,
			dateEnd: "28 Aug 2022",
			text: "Open Registration",
			id: 14,
		},

		{
			dateStart: null,
			dateEnd: "8 Sept 2022",
			text: "Close Registration",
			id: 93,
		},
		{
			dateStart: null,
			dateEnd: "11 Sept 2022",
			text: "Talk Inc. 2",
			id: 928123,
		},
	];

	return (
		<OuterContainer
			id="general-about"
			className="bg-cream d-flex justify-content-center"
		>
			<Container className="d-flex flex-column align-items-center position-relative">
				<Header className="mb-5 text-center">
					TIMELINE <br /> <span className="text-danger">TALK INC 2.0</span>
				</Header>

				<div className="my-3" />
				<HorizontalTimeLineSemnas
					data={timelineDbccSmall}
					className="text-white"
				/>
			</Container>
		</OuterContainer>
	);
};

export default TimelineSharingSessionTwo;
