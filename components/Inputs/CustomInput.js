import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import FormControl from "react-bootstrap/FormControl";

const CustomFormControl = styled(FormControl)`
	border: 1.5px solid #ff5a24;
	border-radius: ${(props) => (props.pill ? `24px` : `inherit`)};
	color: ${(props) => (props.subscriber ? `#88CCF9 !important;` : `inherit`)};
	font-family: Poppins;
	font-weight: 400;
	font-style: ${(props) => (props.subscriber ? `italic;` : `inherit`)};
	width: ${(props) => (props.subscriber ? `320px;` : `inherit`)};
	max-width: 100%;

	::placeholder {
		color: ${(props) => (props.subscriber ? `#88CCF9 !important;` : `inherit`)};
		font-style: ${(props) => (props.subscriber ? `italic;` : `inherit`)};
		font-weight: 200;
	}
`;

const CustomInput = ({
	pill = false,
	subscriberInput = false,
	value,
	onChange,
	...props
}) => {
	return (
		<Form {...props}>
			<CustomFormControl
				value={value}
				onChange={onChange}
				subscriber={subscriberInput ? 1 : 0}
				pill={pill ? 1 : 0}
				type="email"
				placeholder="Email"
			/>
		</Form>
	);
};

export default CustomInput;
