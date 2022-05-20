import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import MyButton from "components/Buttons/MyButton";
import CustomInput from "components/Inputs/CustomInput";
import Logo from "public/assets/logo_enfu.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { mediaBreakpoint } from "utils/mediaBreakpoints";

const StyledModal = styled(Modal)`
	& .modal-content {
		border: none;
		background: #fffbf0;
		border-radius: 28px;

		padding: 24px;

		@media ${mediaBreakpoint.down.md} {
			padding: 8px;
		}
	}

	& .closeBtn:hover {
		cursor: pointer;
	}
`;

const Subheader = styled.p`
	font-family: Poppins;
	font-weight: 500;
	line-height: 21px;
	font-size: 21px;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-weight: 900;
	font-size: 42px;
	line-height: 42px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const DiscalimerText = styled.p`
	font-family: Poppins;
	font-size: 14px;
	font-weight: 200;
	line-height: 22px;
`;

const HalfCircle = styled.div`
	position: absolute;
	top: 0;
	left: 45%;

	width: 60px;
	height: 28px;
	background-color: #88ccf9;
	border-top-left-radius: 80px;
	border-top-right-radius: 80px;
	border: 10px solid #88ccf9;
	border-bottom: 0;
	transform: rotate(180deg);
`;

const OuterHalfCircle = styled.div`
	position: absolute;
	top: 0;
	left: 43.1%;

	width: 90px;
	height: 40px;
	background-color: #fdaf1b;
	border-top-left-radius: 80px;
	border-top-right-radius: 80px;
	border: 10px solid #fdaf1b;
	border-bottom: 0;
	transform: rotate(180deg);
`;
const ImageContainer = styled.div`
	width: 320px;
	height: 250px;

	@media ${mediaBreakpoint.down.lg} {
		width: 250px;
		height: 250px;

		margin-bottom: 32px;
	}

	@media ${mediaBreakpoint.down.md} {
		width: 160px;
		height: 160px;

		margin-bottom: 18px;
	}
`;
const SubscribeModal = ({ showSubscribeModal, setShowSubscribeModal }) => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const handleClick = async () => {
		setLoading(true);
		try {
			const subscribe = await axios({
				method: "post",
				url: "http://localhost:5000/api/subscribe",
				data: {
					email,
				},
			});

			setEmail("");
			setError("");
			setSuccess(true);
			console.log(subscribe);
		} catch (e) {
			if (e.response.status === 409) {
				setError("Email already registered!");
			} else {
				setError("Sorry, an unexpected error happens, please try again!");
			}
		}
		setLoading(false);
	};
	return (
		<StyledModal
			size="lg"
			show={showSubscribeModal}
			onHide={() => {
				setShowSubscribeModal(false);
			}}
			className="position-relative"
		>
			<div className="d-none d-lg-block">
				<OuterHalfCircle />
				<HalfCircle />
			</div>

			<Modal.Body>
				<AiOutlineClose
					style={{ fontSize: 24 }}
					className="d-flex ms-auto my-2 closeBtn"
					onClick={() => {
						setShowSubscribeModal(false);
					}}
				/>

				<div className="d-flex py-3 flex-column flex-lg-row align-items-center">
					<ImageContainer className="position-relative">
						<Image src={Logo} alt="Asd" layout="fill" />
					</ImageContainer>

					<div className="ms-lg-5 ms-0 d-flex flex-column">
						<Subheader className="mt-lg-0 mt-2">
							Let&apos;s keep you updated!
						</Subheader>
						<Header className="my-lg-3 my-2 mb-3">
							Subscribe to our newsletter
						</Header>
						<div className="d-flex mb-2 align-items-center flex-wrap">
							{success ? (
								<Subheader>
									Your subscription to our newsletter was successful!
								</Subheader>
							) : (
								<>
									{" "}
									<CustomInput
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
								</>
							)}
						</div>

						<DiscalimerText>
							By clicking subscribe, you agree to receive email newsletter and
							calender notifications.
						</DiscalimerText>
					</div>
				</div>
			</Modal.Body>
		</StyledModal>
	);
};

export default SubscribeModal;
