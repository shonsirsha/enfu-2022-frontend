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

const Dot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 100%;
`;
const SemnasNavbar = () => {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			style={{ background: "#fffbf0" }}
			className="shadow"
			fixed="top"
		>
			<Container>
				<Link href="/national-seminar" passHref>
					<Navbar.Brand>
						<Image
							src={"/assets/semnaslogo.png"}
							width={143}
							height={76}
							alt="Logo"
						/>
					</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto align-items-center">
						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/national-seminar">
								<StyledNavLink className="">HOME</StyledNavLink>
							</Link>
						</div>
						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/national-seminar#about-us">
								<StyledNavLink className="">ABOUT US</StyledNavLink>
							</Link>
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/national-seminar#testimonials">
								<StyledNavLink className="">TESTIMONIALS</StyledNavLink>
							</Link>
						</div>

						<div className="d-flex flex-column mx-4 align-items-center mb-md-0 mb-3">
							<Link passHref href="/national-seminar/register">
								<a>
									<MyButton variant="danger" textColor="cream">
										<b>
											<i>REGISTER NOW</i>
										</b>
									</MyButton>
								</a>
							</Link>
							{(router.pathname === "/national-seminar/register" ||
								router.pathname === "/national-seminar/register/talk-inc" ||
								router.pathname ===
									"/national-seminar/register/national-seminar") && (
								<Dot className="bg-danger mt-2" />
							)}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default SemnasNavbar;
