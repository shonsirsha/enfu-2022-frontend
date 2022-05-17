import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import MyButton from "components/Buttons/MyButton";
import CustomInput from "components/Inputs/CustomInput";
import Logo from "public/assets/logo_enfu.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const StyledModal = styled(Modal)`
	& .modal-content {
		border: none;
		background: #fffbf0;
		border-radius: 28px;

		padding: 24px;
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

const SubscribeModal = ({ showSubscribeModal, setShowSubscribeModal }) => {
	const [email, setEmail] = useState("");
	const handleClick = async () => {
		try {
			const subscribe = await axios({
				method: "post",
				url: "http://localhost:5000/api/subscribe",
				data: {
					email,
				},
			});

			setEmail("");
			console.log(subscribe);
		} catch (e) {
			console.log("error", e);
		}
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

				<div className="d-flex py-3">
					<div
						className="position-relative"
						style={{ width: 320, height: 250 }}
					>
						<Image src={Logo} alt="Asd" layout="fill" />
					</div>

					<div className="ms-5 d-flex flex-column">
						<Subheader>Let&apos;s keep you updated!</Subheader>
						<Header className="my-3">Subscribe to our newsletter</Header>
						<div className="d-flex mb-2 align-items-center flex-wrap">
							<CustomInput
								value={email}
								onChange={(e) => {
									e.preventDefault();
									setEmail(e.target.value);
								}}
								className="me-2 mb-lg-0 mb-2 text-center"
								pill
								subscriberInput
							/>
							<MyButton
								onClick={handleClick}
								variant="danger"
								pill
								textColor="lightYellow"
							>
								Subscribe
							</MyButton>
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
