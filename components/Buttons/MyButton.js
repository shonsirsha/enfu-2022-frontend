import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
	border-radius: ${(props) => (props.pill ? `24px` : `inherit`)};
	pointer-events: all !important;
	&:hover {
		cursor: ${(props) =>
			props.disabled ? `not-allowed` : `pointer`} !important;
	}
`;
const ButtonText = styled.p`
	font-family: Poppins;
	font-weight: 200;
`;
const MyButton = ({ pill = true, textColor = "white", ...props }) => {
	return (
		<StyledButton pill={pill ? 1 : 0} {...props}>
			<ButtonText className={`text-${textColor}`}>{props.children}</ButtonText>
		</StyledButton>
	);
};

export default MyButton;
