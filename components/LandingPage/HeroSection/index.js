import Image from "next/image";
import React from "react";
import styled from "styled-components";
import EnfuLogo from "public/assets/enfulogo.png";

const StyledContainer = styled.div`
	z-index: 3;
	padding: 64px 24px;
`;

const Header = styled.h1`
	font-size: 64px;
	line-height: 64px;
	font-family: TT_Ramilas;
	font-weight: 900;
`;

const SubHeader = styled.p`
	font-size: 24px;
	line-height: 24px;
	font-family: Poppins;
	font-weight: 500;
`;

const HeroSection = () => {
	return (
		<StyledContainer className="bg-secondary d-flex align-items-center justify-content-center">
			<div className="d-flex flex-lg-row flex-column justify-content-center align-items-center">
				<Image src={EnfuLogo} alt="Logo Enfu" width={196} height={196} />
				<div className="ms-lg-2 ms-0 d-flex flex-column align-items-center text-center">
					<Header>
						The <span className="text-danger">15th</span> Enfution
					</Header>
					<SubHeader className="mt-3">
						NATIONAL SEMINAR | BUSINESS CASE
					</SubHeader>
				</div>
			</div>
		</StyledContainer>
	);
};

export default HeroSection;
