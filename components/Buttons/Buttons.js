import React from "react";
import styled from "styled-components";

const NextButton = styled.button`
	width: 48px;
	height: 48px;
	background: black;
	border-radius: 100%;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: ${(props) => (props.direction === "L" ? `5px` : `0px`)};
	padding-left: ${(props) => (props.direction === "R" ? `4px` : `0px`)};
`;

const CaretL = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={14} height={24.769} {...props}>
		<path
			d="M12.385 24.769a1.61 1.61 0 0 1-1.142-.473L.473 13.527a1.615 1.615 0 0 1 0-2.285L11.242.473a1.616 1.616 0 0 1 2.285 2.285L3.9 12.384l9.627 9.627a1.615 1.615 0 0 1-1.142 2.758Z"
			fill="#fff"
		/>
	</svg>
);

const CaretR = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={14} height={24.769} {...props}>
		<path
			d="M1.615 0a1.61 1.61 0 0 1 1.142.473l10.77 10.769a1.615 1.615 0 0 1 0 2.285L2.758 24.296a1.616 1.616 0 1 1-2.285-2.285l9.627-9.626L.473 2.758A1.615 1.615 0 0 1 1.615 0Z"
			fill="#fff"
		/>
	</svg>
);

const NavigationButton = ({ onClick, className, direction = "L" }) => {
	return (
		<NextButton
			direction={direction}
			className={`shadow ${className}`}
			onClick={onClick}
		>
			{direction === "L" ? <CaretL /> : <CaretR />}
		</NextButton>
	);
};

export default NavigationButton;
