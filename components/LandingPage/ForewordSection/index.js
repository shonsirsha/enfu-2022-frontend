import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import Suharmono from "public/assets/suharmono.png";
import Image from "next/image";

const StyledContainer = styled.div`
	z-index: 3;
	padding: 64px 0;
`;

const ForewordContainer = styled.div`
	min-height: 480px;
	border-top-left-radius: 180px;
	border-bottom-left-radius: 180px;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 0;
	}
`;

const InnerContainer = styled.div`
	padding: 32px;
	padding-left: 64px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${mediaBreakpoint.down.md} {
		padding: 16px;
	}
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-size: 64px;
	line-height: 64px;
`;

const LabelContainer = styled.div`
	border-radius: 32px;
	height: 40px;
	padding: 32px;
	padding-top: 8px;
	flex-grow: 0;
	max-width: 400px;

	@media ${mediaBreakpoint.down.md} {
		padding: 8px;
		height: 32px;
	}
`;

const LabelText = styled.p`
	font-family: Poppins;
	font-weight: 500;
	line-height: 24px;
	font-size: 22px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 14px;
		line-height: 14px;
	}
`;

const DetailText = styled.p`
	font-family: Poppins;
	font-weight: 400;
	font-style: Italic;
	font-size: 14px;
`;

const ForewordText = styled.p`
	font-family: Poppins;
	font-weight: 500;
	font-size: 16px;
	text-align: justify;
`;

const ForewordSection = () => {
	return (
		<StyledContainer className="bg-secondary d-flex flex-column align-items-center justify-content-center">
			<ForewordContainer className="bg-orange w-100">
				<InnerContainer>
					<Header className="mb-1">Foreword.</Header>

					<div className="d-flex align-items-center flex-lg-row flex-column">
						<div style={{ width: 300, height: 300, flexShrink: 0 }}>
							<Image src={Suharmono} alt="Suharmono" />
						</div>

						<div className="d-flex flex-column mt-3 ms-lg-5 ms-0 align-items-lg-start align-items-center">
							<LabelContainer className="bg-danger">
								<LabelText className="text-white text-center">
									Prof. Dr. Suharnomo, S.E., M.Si.
								</LabelText>
							</LabelContainer>

							<DetailText className="mt-1 text-lg-start text-center">
								Dean of Faculty of Economics and Business, Diponegoro University
							</DetailText>

							<ForewordText className="mt-3 text-white text-lg-start text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Quis ipsum
								suspendisse ultrices gravida. Risus commodo viverra maecenas
								accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor inciel
								facilisis. tempor inciel facilisis.
							</ForewordText>
						</div>
					</div>
				</InnerContainer>
			</ForewordContainer>
		</StyledContainer>
	);
};

export default ForewordSection;
