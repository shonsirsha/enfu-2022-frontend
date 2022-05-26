import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
	border-radius: 24px;
	background: #88ccf9;
	border: none;
	-webkit-filter: brightness(100%);
	min-width: 160px;
	&:hover {
		background: #62a6d4;
	}
`;
const ButtonText = styled.p`
	font-family: Poppins;
	font-weight: 500;
`;
const BlueButton = ({ pill = true, textColor = "white", ...props }) => {
	return (
		<StyledButton {...props}>
			<ButtonText className={`text-${textColor}`}>{props.children}</ButtonText>
		</StyledButton>
	);
};

export default BlueButton;
