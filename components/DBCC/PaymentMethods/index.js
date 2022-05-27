import React from "react";
import styled from "styled-components";
import Image from "next/image";

const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	border-radius: 16px;
	border: 6px solid #88ccf9;
`;

const DetailText = styled.p`
	font-size: 18px;
	line-height: 18px;
`;

const PaymentMethod = ({
	accountNumber = "",
	accountName = "",
	alt = "Logo",
	w = 0,
	src = "",
	h = 0,
}) => {
	return (
		<div className="d-flex flex-column">
			<div style={{ width: w, height: h }} className="positon-relative">
				<Image src={src} alt={alt} layout="responsive" />
			</div>

			<DetailsContainer className="mt-1">
				<DetailText className="mb-2">{accountNumber}</DetailText>
				<DetailText>{accountName}</DetailText>
			</DetailsContainer>
		</div>
	);
};

export default PaymentMethod;
