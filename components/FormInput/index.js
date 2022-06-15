import React from "react";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const FormText = styled.p`
	font-size: 16px;
	font-family: Poppins;
`;

const FormInput = ({
	text = "",
	className,
	small = false,
	noMargin = false,
	...props
}) => {
	return (
		<div
			className={`d-flex flex-column w-100 ${
				noMargin ? `me-0` : `me-5`
			} ${className}`}
		>
			<FormText>{text === "" ? `` : `${text}:`}</FormText>
			<FormControl
				className={`${small ? `smallInput` : `normalInput`}`}
				{...props}
			/>
		</div>
	);
};

export default FormInput;
