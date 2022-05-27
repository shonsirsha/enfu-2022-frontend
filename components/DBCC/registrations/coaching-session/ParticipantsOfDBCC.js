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
			<NoticeText className="mb-4">
				Please upload your DBCC’s registration and payment slip below!
			</NoticeText>
			<div className="d-flex mb-4">
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

			<div className="d-flex ms-auto me-5 mt-4">
				{loading ? (
					<NoticeText className="mb-4">Registering...</NoticeText>
				) : (
					<>
						<BlueButton
							onClick={() => {
								handleNext(-1);
							}}
							className="me-3"
						>
							Back
						</BlueButton>
						<BlueButton
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
