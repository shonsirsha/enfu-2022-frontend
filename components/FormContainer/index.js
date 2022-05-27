import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
const InnerContainer = styled.div`
	padding: 24px 32px;
	padding-right: 0;
	background: #fffbf0;
	width: 100%;
	display: flex;
	flex-direction: column;

	@media ${mediaBreakpoint.down.lg} {
		padding: 16px;
	}
`;

const Border = styled.div`
	width: 100%;
	height: 28px;
	border-top-left-radius: ${(props) => (props.top ? `8px` : `0`)};
	border-top-right-radius: ${(props) => (props.top ? `8px` : `0`)};
	display: flex;
	align-items: center;
	border-bottom-left-radius: ${(props) => (!props.top ? `8px` : `0`)};
	border-bottom-right-radius: ${(props) => (!props.top ? `8px` : `0`)};
	background: #feb01c;
	padding: 16px;
`;

const FauxButtons = styled.div`
	border-radius: 100%;
	width: 12px;
	height: 12px;
	background ${(props) => (props.bg ? props.bg : `#000000`)};
`;

const FormContainer = ({ ...props }) => {
	return (
		<div className="d-flex flex-column w-100">
			<Border top={1} className="shadow">
				<FauxButtons className="me-2" bg={"#FF5A24"} />
				<FauxButtons className="me-2" />
				<FauxButtons bg={"#88CCF9"} />
			</Border>
			<InnerContainer className="shadow">{props.children}</InnerContainer>
			<Border top={0} className="shadow" />
		</div>
	);
};

export default FormContainer;
