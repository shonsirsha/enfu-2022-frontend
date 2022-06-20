import React from "react";
import styled from "styled-components";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import { SemiCircle } from "components/SemiCircle";

const OuterContainer = styled.div`
	display: flex;
	border-top-right-radius: 20%;
	border-top-left-radius: 20%;
	padding: 32px;
	padding-top: 160px;

	@media ${mediaBreakpoint.down.md} {
		border-radius: 0%;
	} ;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-size: 70px;
	font-weight: 700;
	line-height: 70px;
	z-index: 3;
	& span {
		font-family: Poppins;
	}
`;
const Subheader = styled.h2`
	font-size: 28px;
	font-weight: 800;
	line-height: 28px;
`;
const Text = styled.p`
	font-size: 18px;
	line-height: 24px;
	font-weight: 300;
`;

const StyledSemi = styled(SemiCircle)`
	top: 0;
	position: absolute;
	transform: rotate(180deg);
	width: 235px;
	height: 120px;
	border: 30px solid #fffbf0;
	background: #88ccf9;
	border-bottom: none;
`;

const OutermostContainer = styled.div`
	padding-top: 81px;
	min-height: 100vh;

	@media ${mediaBreakpoint.down.md} {
		padding: 0;
	}
`;
const Container = styled.div`
	max-width: 1320px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const SuccessSemnas = () => {
	return (
		<OutermostContainer className="bg-cream d-flex ">
			<OuterContainer className="bg-orange w-100 d-flex flex-column align-items-center position-relative">
				<StyledSemi />

				<Container>
					<Header className="text-cream text-center">
						THANK YOU <span>!</span>
					</Header>
					<Subheader className="my-4">See you in November</Subheader>

					<Text className="mt-2 text-center">
						<i>
							*If there is no error in filliing the form, within 2x24 hours you
							will get a verification email (
							<b>
								<u>please also check your spam folder</u>
							</b>
							), contain link and password for join the seminar *If within 2x24
							hours you do not receive the verification email from the
							committee, please contact us
						</i>
					</Text>
				</Container>
			</OuterContainer>
		</OutermostContainer>
	);
};

export default SuccessSemnas;
