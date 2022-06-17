import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import MyButton from "components/Buttons/MyButton";
import Link from "next/link";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledNavLink = styled.a`
	font-family: Poppins;
	font-weight: 500;
	font-size: 18px;
	font-style: Italic;
	color: #000 !important;
	text-decoration: none;
	margin-top: 0;

	@media ${mediaBreakpoint.down.lg} {
		margin-bottom: 16px;
	}

	&:hover {
		cursor: pointer;
	}
`;

const EnfuNavbar = () => {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			style={{ background: "#fffbf0" }}
			className="shadow"
			fixed="top"
		>
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand>
						<Image
							src={"/assets/enfulogo.png"}
							alt="Logo Enfu"
							width={86}
							height={86}
						/>
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto align-items-center">
						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/">
								<StyledNavLink className="">HOME</StyledNavLink>
							</Link>
						</div>
						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="#about-us">
								<StyledNavLink
									onClick={() => {
										setTimeout(() => {
											const blue = document.getElementById("about-us");
											let position = blue.getBoundingClientRect();
											// scrolls to 20px above element
											window.scrollTo(
												position.left,
												position.top + window.scrollY - 120
											);
										}, 150);
									}}
									className=""
								>
									ABOUT US
								</StyledNavLink>
							</Link>
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="#timeline">
								<StyledNavLink>TIMELINE</StyledNavLink>
							</Link>
						</div>

						<div className="d-flex flex-column mx-4 align-items-center mb-md-0 mb-3">
							<Link passHref href="#events">
								<a>
									<MyButton variant="danger" textColor="cream">
										<b>
											<i>REGISTER NOW</i>
										</b>
									</MyButton>
								</a>
							</Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default EnfuNavbar;
