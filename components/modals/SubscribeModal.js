import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import MyButton from "../Buttons/MyButton";
import CustomInput from "../Inputs/CustomInput";

const StyledModal = styled(Modal)`
	& .modal-content {
		border: none;
		background: #fffbf0;
		border-radius: 28px;

		padding: 24px;
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

const SubscribeModal = () => {
	return (
		<StyledModal size="lg" show onHide={() => {}} className="position-relative">
			<div className="d-none d-lg-block">
				<OuterHalfCircle />
				<HalfCircle />
			</div>

			<Modal.Body>
				<div className="d-flex flex-column">
					<Subheader>Let&apos;s keep you updated!</Subheader>
					<Header className="my-3">Subscribe to our newsletter</Header>
					<div className="d-flex mb-2 align-items-center flex-wrap">
						<CustomInput
							className="me-2 mb-lg-0 mb-2 text-center"
							pill
							subscriberInput
						/>
						<MyButton variant="danger" pill textColor="lightYellow">
							Subscribe
						</MyButton>
					</div>
					<DiscalimerText>
						By clicking subscribe, you agree to receive email newsletter and
						calender notifications.
					</DiscalimerText>
				</div>
			</Modal.Body>
		</StyledModal>
	);
};

export default SubscribeModal;
