import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import { SemiCircle } from "components/SemiCircle";

const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	max-width: 1320px;
	align-items: center;
	justify-content: center;
	padding: 32px;
	@media (max-width: 1194px) and ${mediaBreakpoint.up.lg} {
		max-width: 996px;
	}
`;

const InnerContainer = styled.div`
	height: 100%;
	padding: 90px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 24px;
	position: relative;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-size: 64px;
	font-weight: 700;
	line-height: 64px;
	z-index: 3;
	& span {
		font-family: Poppins;
	}
`;

const Text = styled.p`
	font-size: 21px;
	line-height: 28px;
	font-weight: 600;
	z-index: 3;
`;

const StyledSemi = styled(SemiCircle)`
	top: 0;
	position: absolute;
	transform: rotate(180deg);
	width: 77px;
	height: 35px;
`;

const StyledSemi2 = styled(SemiCircle)`
	top: 0;
	position: absolute;
	transform: rotate(180deg);
	width: 60px;
	height: 27px;
`;

const Circle = styled.div`
	width: 90px;
	height: 90px;
	border-radius: 100%;
	z-index: 2;
	top: 20px;
	top: 35%;
	right: 28%;
`;

const SuccessDBCC = () => {
	return (
		<div className="bg-orange d-flex align-items-center justify-content-center">
			<OuterContainer className="bg-orange w-100">
				<InnerContainer className="bg-secondary w-100 shadow">
					<StyledSemi className="bg-orange shadow-sm" />
					<StyledSemi2 className="bg-danger" />

					<Header className="mb-2 text-white text-center">
						THANK YOU<span>!</span>
					</Header>
					<Text className="text-center">
						Your registration have completed. For further <br /> notice, will be
						announced through your e-mail{" "}
						<i>(please also check your spam folder).</i>.
					</Text>

					<Circle className="bg-orange position-absolute" />
				</InnerContainer>
			</OuterContainer>
		</div>
	);
};

export default SuccessDBCC;
