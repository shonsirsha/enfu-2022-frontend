import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
	& .modal-content {
		border: none;
		background: #fffbf0;

		padding: 24px;
	}
`;

const Subheader = styled.p`
	font-family: Poppins;
	font-weight: 500;
	font-size: 24px;
`;

const Header = styled.h2`
	font-family: TT_Ramilas;
	font-weight: 900;
	font-size: 38px;
`;

const SubscribeModal = () => {
	return (
		<StyledModal size="lg" show onHide={() => {}}>
			<Modal.Body>
				<div className="d-flex flex-column">
					<Subheader>Let&apos;s keep you updated!</Subheader>
					<Header>Subscribe to our newsletter</Header>
				</div>
			</Modal.Body>
		</StyledModal>
	);
};

export default SubscribeModal;
