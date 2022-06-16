import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import MyButton from "components/Buttons/MyButton";
import CustomInput from "components/Inputs/CustomInput";
import EnfuLogo from "public/assets/enfulogo.png";
import Image from "next/image";
import LineLogo from "public/assets/line_logo.png";
import LinkedinLogo from "public/assets/linkedin_logo.png";
import InstagramLogo from "public/assets/instagram_logo.png";
import EmailLogo from "public/assets/email_logo.png";

const StyledContainer = styled.div`
	z-index: 3;
`;

const FooterContainer = styled.div`
	border-bottom: 48px solid #ff5a24;
	border-top: 48px solid #ff5a24;
	padding: 32px 64px;
	padding-top: 16px;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 0;
		padding: 24px;
	}
`;

const Separator = styled.div`
	height: 90px;
	width: 4px;
	background: #000;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-size: 40px;
	font-weight: 600;
	line-height: 40px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const TextLink = styled.a`
	font-family: Poppins;
	font-size: 14px;
	text-decoration: none;
`;

const DetailText = styled.p`
	font-family: Poppins;
	font-weight: 600;
	font-style: Italic;
	font-size: 14px;
`;

const SubscribeHeader = styled.p`
	font-family: Poppins;
	font-weight: 800;
	font-size: 20px;
`;

const Subheader = styled.p`
	font-family: Poppins;
	font-weight: 500;
	line-height: 21px;
	font-size: 21px;
	width: 300px;
`;

const DiscalimerText = styled.p`
	font-family: Poppins;
	font-weight: 300;
	font-size: 12px;
	width: 300px;
`;

const ImageContainer = styled.div`
	width: 280px;
	height: 120px;
	position: relative;
	flex-shrink: 0;
`;

const ContactUsHeaderText = styled.p`
	font-size: 32px;
	font-height: 24px;

	font-family: TT_Ramilas;
	font-weight: 600;
	margin: 0;
`;

const EmailText = styled.p`
	font-size: 16px;
	margin: 0;
	font-height: 16px;
	font-weight: 300;
`;

const KeepUpdateText = styled.p`
	font-size: 18px;
`;

const FooterSectionSemnas = () => {
	return (
		<StyledContainer
			id="contactus"
			className="bg-cream d-flex flex-column align-items-center justify-content-center"
		>
			<FooterContainer className="bg-cream w-100">
				<div className="w-100 d-flex justify-content-between align-items-center flex-lg-row flex-column">
					<div className="d-flex flex-column align-items-center mb-lg-0 mb-3 mt-lg-0 mt-3">
						<div className="d-flex  flex-column">
							<ImageContainer>
								<Image
									src={"/assets/semnaslogo2.png"}
									layout="fill"
									alt="Logo"
								/>
							</ImageContainer>

							<ContactUsHeaderText className="mt-4 text-lg-left text-center">
								Contact Us
							</ContactUsHeaderText>

							<EmailText className="text-lg-left text-center">
								enfutionundip.semnas@gmail.com
							</EmailText>
						</div>
					</div>

					<div className="d-flex flex-column mb-lg-0 mb-3">
						<KeepUpdateText className="mb-3 text-center">
							<i>keep yourself updated through our social media channels</i>
						</KeepUpdateText>
						<div className="d-flex">
							<Image src={LineLogo} width={20} height={20} alt="Logo" />
							<TextLink
								className="ms-1 text-black"
								href="https://line.me/ti/p/@enfutionundip"
								target="_blank"
								rel="noopener noreferrer"
							>
								@enfutionundip
							</TextLink>
						</div>

						<div className="d-flex mt-2">
							<Image src={InstagramLogo} width={20} height={20} alt="Logo" />
							<TextLink
								className="ms-1 text-black"
								href="https://instagram.com/enfutionundip"
								target="_blank"
								rel="noopener noreferrer"
							>
								enfutionundip
							</TextLink>
						</div>

						<div className="d-flex mt-2">
							<Image src={EmailLogo} width={24} height={20} alt="Logo" />
							<TextLink
								className="ms-1 text-black"
								href="mailto:info.DBCC2022@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								info.DBCC2022@gmail.com
							</TextLink>
						</div>

						<div className="d-flex mt-2">
							<Image src={LinkedinLogo} width={20} height={16} alt="Logo" />
							<TextLink
								className="text-black ms-2"
								href="https://www.linkedin.com/company/enfution/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Enfution Undip
							</TextLink>
						</div>
					</div>
				</div>
			</FooterContainer>
		</StyledContainer>
	);
};

export default FooterSectionSemnas;
