import Link from "next/link";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { mediaBreakpoint } from "utils/mediaBreakpoints";

const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	padding-bottom: 24px;
`;

const InnerContainer = styled.div`
	border-radius: 30%;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	width: 100%;
	padding-top: 32px;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 25%;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 40px;
	line-height: 40px;
	letter-spacing: 3.5px;
`;

const LinkContainer = styled.div`
	padding: 8px 32px;
	border-radius: 80px;
	display: flex;
	width: 270px;

	&:hover {
		cursor: ${(props) => (props.open ? `pointer` : `not-allowed`)};
	}
`;

const StyledLink = styled.a`
	font-size: 24px;
	font-height: 24px;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 500;
	font-family: Poppins;
	& a:hover {
		color: inherit;
	}
`;

const ImageContainer = styled.div`
	width: 520px;
	height: 232px;
	position: relative;

	@media ${mediaBreakpoint.down.md} {
		width: 300px;
		height: 132px;
	}
`;

const PillLink = ({ text, open, href = "/", className }) => (
	<>
		{open ? (
			<Link href={href}>
				<LinkContainer
					open={1}
					className={`bg-danger justify-content-center ${className}`}
				>
					<StyledLink className="text-cream text-center">{text}</StyledLink>
				</LinkContainer>
			</Link>
		) : (
			<LinkContainer
				open={0}
				className={`bg-gray justify-content-center ${className}`}
			>
				<StyledLink className="text-cream text-center">
					{text} (<i>Closed</i>)
				</StyledLink>
			</LinkContainer>
		)}
	</>
);

const Register = ({ config }) => {
	const { regist_semnas_open, regist_sharing_session_open } = config;
	return (
		<OuterContainer className="bg-secondary">
			<InnerContainer className="bg-cream d-flex justify-content-center shadow">
				<Container className="d-flex flex-column align-items-center">
					<ImageContainer>
						<Image src={"/assets/semnaslogo2.png"} alt="Logo" layout="fill" />
					</ImageContainer>

					<Header className="mt-md-2 mb-md-4 mt-1 mb-3">
						REGISTER <span className="text-danger">FOR:</span>
					</Header>

					<div className="d-flex justify-content-center align-items-center flex-lg-row flex-column w-100 mt-4">
						<PillLink
							open={regist_sharing_session_open ? 1 : 0}
							className="me-lg-4 me-0 my-lg-0 my-4"
							text={
								<>
									Talk <br /> Inc
								</>
							}
							href="/national-seminar/register/talk-inc"
						/>
						<PillLink
							open={regist_semnas_open ? 1 : 0}
							text={
								<>
									National <br /> Seminar
								</>
							}
							href="/national-seminar/register/national-seminar"
						/>
					</div>
				</Container>
			</InnerContainer>
		</OuterContainer>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const config = (await res.json()).result[0];

	return {
		props: {
			config: config ? config : null,
		},
	};
}

export default Register;
