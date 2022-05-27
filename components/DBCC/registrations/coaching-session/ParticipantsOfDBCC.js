import React from "react";
import FormInput from "components/FormInput";
import BlueButton from "components/Buttons/BlueButton";
import styled from "styled-components";
const Subheader = styled.p`
	font-family: TT_Ramilas;
	font-size: 24px;
	line-height: 24px;
`;

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	font-style: italic;
`;

const ParticipantsOfDBCC = ({
	handleNext,
	onChange,
	details,
	handleSubmit,
	loading,
}) => {
	const { dbccTeamName, dbccCodeOfRegistration } = details;
	return (
		<div className="d-flex flex-column">
			<Subheader className="mb-4 text-danger">Participants of DBCC</Subheader>

			<div className="d-flex flex-lg-row flex-md-row flex-column mb-4">
				<FormInput
					text={"Team Name*"}
					value={dbccTeamName}
					onChange={onChange}
					name="dbccTeamName"
				/>
				<FormInput
					onChange={onChange}
					value={dbccCodeOfRegistration}
					text={"Code of Registration*"}
					name="dbccCodeOfRegistration"
				/>
			</div>

			<div className="d-flex ms-lg-auto ms-md-auto ms-0 me-lg-5 me-md-4 me-0 mt-4 flex-lg-row flex-md-row flex-column">
				{loading ? (
					<NoticeText>Registering...</NoticeText>
				) : (
					<>
						<BlueButton
							onClick={() => {
								handleNext(-1);
							}}
							className="me-lg-3 me-md-3 me-0 mb-3 mb-lg-0 mb-md-0 shadow"
						>
							BACK
						</BlueButton>
						<BlueButton
							className="shadow"
							onClick={() => {
								handleSubmit();
							}}
						>
							SUBMIT
						</BlueButton>
					</>
				)}
			</div>
		</div>
	);
};
export default ParticipantsOfDBCC;
