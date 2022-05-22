import Ribbon from "components/Ribbon";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import DBCCLogo from "public/assets/dbcclogo.png";
import SemnasLogo from "public/assets/semnaslogo.png";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledContainer = styled.div`
	height: 100vh;
	z-index: 3;
	padding: 64px 24px;
	padding-top: 186px;
	border-radius: 104px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`;

const TextContainer = styled.div`
	min-height: 400px;
	max-width: 820px;
	width: 100%;
	margin: 0 auto;
	bottom: 282px;
	border-radius: 24px;
	position: relative;
	padding: 32px;
	display: flex;
	flex-direction: column;

	@media ${mediaBreakpoint.down.md} {
		padding: 16px;
	}
`;

const PillContainer = styled.div`
	background: transparent;
	padding: 8px;
	border-radius: 72px;
	margin-top: auto;
	width: 100%;
	max-width: 480px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid 18px #88ccf9;

	& .semnasLogo {
		width: 220.61px;
		height: 114px;
	}

	& .dbccLogo {
		width: 92px;
		height: 92px;
	}

	@media ${mediaBreakpoint.down.md} {
		border: solid 10px #88ccf9;

		& .dbccLogo {
			width: 64px;
			height: 64px;
		}

		& .semnasLogo {
			width: 190.61px;
			height: 92px;
		}
	}
`;

const AndText = styled.p`
	font-family: Poppins;
	font-weight: 500;
	font-style: italic;
`;

const AboutUsSection = () => {
	return (
		<div className="bg-secondary" style={{ paddingTop: 164 }}>
			<StyledContainer className="bg-orange">
				<TextContainer className="bg-cream position-relative">
					<Ribbon text="About Us" />

					<PillContainer className="mx-auto flex-column flex-lg-row">
						<div className="semnasLogo position-relative">
							<Image src={SemnasLogo} alt="Logo" layout="fill" />
						</div>
						<AndText className="text-danger me-2">and</AndText>

						<div className="dbccLogo position-relative">
							<Image src={DBCCLogo} alt="Logo" layout="fill" />
						</div>
					</PillContainer>
				</TextContainer>
			</StyledContainer>
		</div>
	);
};

export default AboutUsSection;
