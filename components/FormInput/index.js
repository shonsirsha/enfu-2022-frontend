import React from "react";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const FormText = styled.p`
	font-size: 16px;
	font-family: Poppins;
`;

const FormInput = ({ text = "", className, ...props }) => {
	return (
		<div className={`d-flex flex-column w-100 me-5 ${className}`}>
			<FormText>{text}:</FormText>
			<FormControl {...props} />
		</div>
	);
};

export default FormInput;
