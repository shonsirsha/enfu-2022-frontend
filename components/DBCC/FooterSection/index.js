import React, { useState } from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import MyButton from "components/Buttons/MyButton";
import axios from "axios";
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
	width: 90px;
	height: 90px;
	position: relative;
	flex-shrink: 0;
	@media ${mediaBreakpoint.down.md} {
		font-size: 40px;
		line-height: 40px;
	}
`;

const FooterSectionDBCC = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const handleClick = async () => {
		setLoading(true);
		try {
			await axios({
				method: "post",
				url: "http://localhost:5000/api/subscribe",
				data: {
					email,
				},
			});

			setEmail("");
			setError("");
			setSuccess(true);
		} catch (e) {
			console.log(e);
			if (e.response.status === 409) {
				setError("Email already registered!");
			} else {
				setError("Sorry, an unexpected error happens, please try again!");
			}
		}
		setLoading(false);
	};
	return (
		<StyledContainer
			id="contactus"
			className="bg-cream d-flex flex-column align-items-center justify-content-center"
		>
			<FooterContainer className="bg-cream w-100">
				<div className="w-100 d-flex justify-content-between align-items-center flex-lg-row flex-column">
					<div className="d-flex flex-column mb-lg-0 mb-3">
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
					<div className="d-flex flex-column align-items-center mb-lg-0 mb-3 mt-lg-0 mt-3">
						<div className="d-flex align-items-center flex-lg-row flex-column">
							<ImageContainer>
								<Image
									src={"/assets/dbcclogolarge.png"}
									layout="fill"
									alt="Logo"
								/>
							</ImageContainer>

							<Separator className="mx-4 d-none d-lg-block" />
							<Header className="mt-lg-0 mt-4 text-lg-start text-center">
								DIPONEGORO BUSINESS <br /> CASE COMPETITION{" "}
								<span className="text-orange">2022</span>
							</Header>
						</div>
						<DetailText className="text-danger mt-3 text-lg-start text-center">
							{`"Eternal Economic Prosperity by Maximising Smart Technology"`}
						</DetailText>
					</div>

					<div className="d-flex flex-column">
						<SubscribeHeader className="ms-lg-auto mb-3 mx-auto mx-lg-0 text-lg-end text-center">
							Subscribe to
							<br /> The 13th Enfution
						</SubscribeHeader>

						{success ? (
							<Subheader className="text-lg-end text-center mb-2">
								Your subscription to our newsletter was successful!
							</Subheader>
						) : (
							<div className="d-flex">
								<CustomInput
									style={{ width: 200 }}
									value={email}
									onChange={(e) => {
										e.preventDefault();
										setEmail(e.target.value);
									}}
									className="me-2 mb-lg-0 mb-2 text-center"
									pill
									onSubmit={handleClick}
									errorText={error}
									subscriberInput
								/>
								<MyButton
									onClick={handleClick}
									disabled={loading}
									variant="danger"
									className="mb-auto"
									pill
									textColor="lightYellow"
								>
									Subscribe
								</MyButton>
							</div>
						)}

						<DiscalimerText className="ms-lg-auto ms-0 text-lg-end">
							By clicking subscribe, you agree to receive email newsletter and
							calendar notifications.
						</DiscalimerText>
					</div>
				</div>
			</FooterContainer>
		</StyledContainer>
	);
};

export default FooterSectionDBCC;
