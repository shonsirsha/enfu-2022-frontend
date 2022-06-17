import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import HorizontalTimeLineSemnas from "components/TimeLines/HorizontalTimeLineSemnas";

const OuterContainer = styled.div`
	display: flex;
	padding: 64px 32px;
	border-top-right-radius: 240px;
	border-top-left-radius: 240px;

	@media ${mediaBreakpoint.down.md} {
		border-top-right-radius: 120px;
		border-top-left-radius: 120px;
	}
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

const TimelineSemnas = () => {
	const timelineDbccSmall = [
		{
			dateStart: null,
			dateEnd: "Date",
			text: "Event Name",
			id: 14,
		},

		{
			dateStart: null,
			dateEnd: "Date",
			text: "Event Name",
			id: 93,
		},
		{
			dateStart: null,
			dateEnd: "Date",
			text: "Event Name",
			id: 928123,
		},
		{
			dateStart: null,
			dateEnd: "Date",
			text: "Event Name",
			id: 123,
		},
		{
			dateStart: null,
			dateEnd: "Date",
			text: "Event Name",
			id: 98123,
		},
	];

	return (
		<div id="general-about" className="bg-secondary w-100 d-flex">
			<OuterContainer className="bg-cream d-flex justify-content-center w-100">
				<Container className="d-flex flex-column align-items-center position-relative">
					<Header className="mb-5 text-center">
						TIMELINE <br />{" "}
						<span className="text-danger">NATIONAL SEMINAR</span>
					</Header>

					<div className="my-3" />
					<HorizontalTimeLineSemnas data={timelineDbccSmall} />
				</Container>
			</OuterContainer>
		</div>
	);
};

export default TimelineSemnas;
