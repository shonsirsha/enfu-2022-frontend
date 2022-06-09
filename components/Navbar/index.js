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

// const StyledNav = styled(Navbar)`
// 	width: 100%;
// 	padding: 0 32px;
// 	display: flex;
// 	z-index: 1;
// 	& .navbar-brand {
// 		width: 100%;
// 		margin: 0;
// 		display: flex;
// 		align-items: center;
// 		margin: 10px 0;
// 	}
// 	& .navbar-brand span {
// 		display: flex;
// 		align-items: center;
// 		margin: 0;
// 	}
// 	& .navbar-collapse {
// 		height: 78px;
// 	}
// 	@media ${mediaBreakpoint.down.lg} {
// 		& .navbar-collapse {
// 			height: revert;
// 		}
// 		& .collapsing {
// 			height: 0;
// 			overflow: hidden;
// 			transition: height 0.35s ease;
// 		}
// 		padding: 16px 24px;
// 	}
// `;

const ImageContainer = styled.div`
	width: 56px;
	height: 56px;
	position: relative;
`;

const StyledNavLink = styled.a`
	font-family: Poppins;
	font-weight: 500;
	font-size: 18px;
	font-style: Italic;
	color: #000 !important;
	text-decoration: none;
	margin-top: ${(props) => (props.active ? `14px` : `4px`)};

	&:hover {
		cursor: pointer;
	}
`;

const StyledNavDropDown = styled(NavDropdown)`
	& .nav-link {
		font-family: Poppins;
		font-weight: 500;
		font-size: 18px;
		font-style: Italic;
		color: #000 !important;
	}

	& .dropdown-menu {
		border: none;
		background: #fffbf0;

		border: 1px solid black;
		text-transform: uppercase;
		text-align: center;
		padding: 0;
	}

	& a {
		font-family: Poppins;
		font-weight: 500;
		font-size: 14px;
		text-decoration: none;
		color: #000 !important;
	}
	& .dropdown-item:hover {
		background: #dfd7b9;
	}

	& .navdropdownitem a {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	& .navdropdownitem:hover {
		background: #dfd7b9;
	}
`;
const Dot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 100%;
`;
const MyNavbar = () => {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			style={{ background: "#fffbf0" }}
			className="shadow"
			fixed="top"
		>
			<Container>
				<Navbar.Brand href="/dbcc">
					<Image
						src={"/assets/dbcclogolarge.png"}
						width={56}
						height={56}
						alt="Logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto align-items-center">
						<div className="d-flex flex-column align-items-center">
							<StyledNavDropDown title="HOME" id="basic-nav-dropdown">
								<div className="d-flex navdropdownitem">
									<Link href="/dbcc">
										<a className="w-100">DBCC</a>
									</Link>
								</div>

								<div className="d-flex navdropdownitem">
									<Link href="/dbcc/coaching-session">
										<a className="w-100">Coaching Session</a>
									</Link>
								</div>

								<div className="d-flex navdropdownitem">
									<Link href="/dbcc/coaching-clinic">
										<a className="w-100">Coaching Clinic</a>
									</Link>
								</div>
							</StyledNavDropDown>
							{(router.pathname === "/dbcc" ||
								router.pathname === "/dbcc/coaching-session" ||
								router.pathname === "/dbcc/coaching-clinic") && (
								<Dot className="bg-danger" />
							)}
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/dbcc/about-us">
								<StyledNavLink
									active={router.pathname === "/dbcc/about-us" ? 1 : 0}
									className=""
								>
									ABOUT US
								</StyledNavLink>
							</Link>
							{router.pathname === "/dbcc/about-us" && (
								<Dot className="bg-danger" />
							)}
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/dbcc/testimonials">
								<StyledNavLink
									active={router.pathname === "/dbcc/testimonials" ? 1 : 0}
									className=""
								>
									TESTIMONIALS
								</StyledNavLink>
							</Link>
							{router.pathname === "/dbcc/testimonials" && (
								<Dot className="bg-danger" />
							)}
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="#contactus">
								<StyledNavLink active={0} className="">
									CONTACT US
								</StyledNavLink>
							</Link>
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/dbcc/covid-disclaimer">
								<StyledNavLink
									active={router.pathname === "/dbcc/covid-disclaimer" ? 1 : 0}
									className=""
								>
									COVID-19 DISCLAIMER
								</StyledNavLink>
							</Link>
							{router.pathname === "/dbcc/covid-disclaimer" && (
								<Dot className="bg-danger" />
							)}
						</div>

						<div className="d-flex flex-column mx-4 align-items-center">
							<Link passHref href="/dbcc/register">
								<a>
									<MyButton variant="danger" textColor="cream">
										<b>
											<i>REGISTER NOW</i>
										</b>
									</MyButton>
								</a>
							</Link>
							{(router.pathname === "/dbcc/register" ||
								router.pathname === "/dbcc/register/coaching-session" ||
								router.pathname === "/dbcc/register/coaching-clinic" ||
								router.pathname === "/dbcc/register/dbcc") && (
								<Dot className="bg-danger mt-2" />
							)}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
