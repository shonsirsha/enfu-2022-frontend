import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormText = styled.p`
	font-size: 16px;
	font-family: Poppins;
`;

const Select = ({
	text = "",
	className,
	content = [{ value: "", text: "" }],
	...props
}) => {
	return (
		<div className={`d-flex flex-column w-100 me-5 ${className}`}>
			<FormText>{text}:</FormText>
			<Form.Select aria-label="Default select example" {...props}>
				{content.map((c) => (
					<option key={c.value} value={c.value}>
						{c.value}
					</option>
				))}
			</Form.Select>
		</div>
	);
};

export default Select;
